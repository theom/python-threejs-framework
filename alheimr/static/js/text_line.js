
// Copyright 2014 Jens Páll Hafsteinsson
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

alheimr.text_line = function text_line(text, scale)
{
    alheimr.ui_component.call(this);
    
    this.editable = false;
    this.acute = false;

    // The line geometries need more work - They are too arbitrary as is
    
    this.scale.x = scale || 2;
    this.scale.y = scale || 2;
    this.height = 10;
    this.letter_spacing = 1.0 * this.scale.x;

    this.letters = [];
    this.letter_pos = new three.Vector3(0, 0, 0);
    
    this.set_text(text);

    var geo;
    var mat;

    // Cursor
    geo = new three.Geometry();
    geo.vertices.push(new three.Vector3(0, -2.2 * this.scale.x, 0));
    geo.vertices.push(new three.Vector3(0,  2.2 * this.scale.x, 0));
    mat = new three.LineBasicMaterial({color: 0x0000ff, linewidth: 1.5});
    this.cursor = new three.Line(geo, mat);
    this.cursor.translateZ(0.5);
    this.cursor.visible = false;
    this.add(this.cursor);

    // Ruler
    // m = new three.LineBasicMaterial({color: 0x000000});
    // g = new three.Geometry();
    // g.vertices.push(new three.Vector3(0, -12, 0));
    // g.vertices.push(new three.Vector3(100, -12, 0));
    // this.ruler = new three.Line(g, m);
    // for (var i = 0; i < 100; i += 10)
    // {
    //     g = new three.Geometry();
    //     g.vertices.push(new three.Vector3(i, -12, 0));
    //     g.vertices.push(new three.Vector3(i, -10, 0));
    //     this.ruler.add(new three.Line(g, m));
    // }
    // this.add(this.ruler);
}

alheimr.extend(alheimr.text_line, alheimr.ui_component);

alheimr.text_line.prototype.set_scale = function set_scale(s)
{
    this.scale.x = s;
    this.scale.y = s;
}

alheimr.text_line.prototype.get_height = function get_height()
{
    return this.height * this.scale.x;
}

alheimr.text_line.prototype.get_width = function get_width()
{
    return this.width * this.scale.x;
}

alheimr.text_line.prototype.set_text = function set_text(text)
{
    this.clear_text();

    this.text = text;
    for (var i = 0; i < this.text.length; i++)
    {
        var letter = new alheimr.letter(this.text[i]);
        //letter.frame(true);
        letter.set_scale(this.scale.x);
        this.letter_pos.x += letter.half_width;
        this.letter_pos.y = -letter.base;
        letter.position_index = i;
        letter.set_position(this.letter_pos);
        this.letters[i] = letter;
        this.add(letter);
        this.letter_pos.x += letter.half_width + this.letter_spacing;
    }

    this.width = this.letter_pos.x;
    
    // Enable hit detection on all the children
    var self = this;
    this.traverse(function(mesh)
                  {
                      mesh.comp = self;
                  });
}

alheimr.text_line.prototype.set_editable = function set_editable(editable)
{
    this.editable = editable;
}

alheimr.text_line.prototype.on_mouse_down = function on_mouse_down(event)
{
    if (!this.editable)
    {
        return;
    }
    
    this.cursor.visible = true;

    var letter = event.object.object.parent;
    this.cursor.position_index = letter.position_index;

    this.cursor.delta = event.object.point.x - (this.position.x + this.scale.x * letter.position.x);
    if (this.cursor.delta >= 0)
    {
        // The cursor should be positioned on the right of the letter
        this.cursor.position.x = letter.position.x + letter.half_width + this.letter_spacing / 2;
        // The cursor position always refers to the letter on the right
        this.cursor.position_index++;
    }
    else
    {
        // The cursor should be positioned on the left of the letter
        this.cursor.position.x = letter.position.x - letter.half_width - this.letter_spacing / 2;
    }
}

alheimr.text_line.prototype.on_mouse_enter = function on_mouse_enter(event)
{
    if (this.editable)
    {
        document.body.style.cursor = "text";
    }
}

alheimr.text_line.prototype.on_mouse_leave = function on_mouse_enter(event)
{
    document.body.style.cursor = "default";
}

alheimr.text_line.prototype.on_key_down = function on_key_down(event)
{
    if (!this.editable)
    {
        return;
    }
    
    if (event.keyCode === 39) // right
    {
        if (this.cursor.position_index < this.letters.length)
        {
            var letter = this.letters[this.cursor.position_index++]
            this.cursor.position.x = letter.position.x + letter.half_width + this.letter_spacing / 2;
        }
    }
    else if (event.keyCode === 37) // left
    {
        if (this.cursor.position_index > 0)
        {
            var letter = this.letters[--this.cursor.position_index]
            this.cursor.position.x = letter.position.x - letter.half_width - this.letter_spacing / 2;
        }
    }
    else if (event.keyCode === 8) // delete
    {
        this.remove_character(false);
        event.preventDefault();
    }
    else if (event.keyCode === 46) // del
    {
        this.remove_character(true);
    }
}

alheimr.text_line.prototype.on_key_press = function on_key_press(event)
{
    if (!this.editable)
    {
        return;
    }
    
    if (this.acute)
    {
        return;
    }
    
    if ((32 <= event.charCode && event.charCode <= 122) ||
        (event.charCode === 198 ||
         event.charCode === 208 ||
         event.charCode === 214 ||
         event.charCode === 222 ||
         event.charCode === 230 ||
         event.charCode === 240 ||
         event.charCode === 246 ||
         event.charCode === 254))
    {
        this.insert_character(String.fromCharCode(event.charCode));
    }
}

alheimr.text_line.prototype.on_key_up = function on_key_up(event)
{
    if (!this.editable)
    {
        return;
    }
    
    if (this.acute)
    {
        switch (event.keyCode)
        {
            case 65: event.shiftKey ? this.insert_character("Á") : this.insert_character("á"); break;
            case 69: event.shiftKey ? this.insert_character("É") : this.insert_character("é"); break;
            case 73: event.shiftKey ? this.insert_character("Í") : this.insert_character("í"); break;
            case 79: event.shiftKey ? this.insert_character("Ó") : this.insert_character("ó"); break;
            case 85: event.shiftKey ? this.insert_character("Ú") : this.insert_character("ú"); break;
            case 89: event.shiftKey ? this.insert_character("Ý") : this.insert_character("ý"); break;
        }
        this.acute = false;
    }

    switch (event.keyCode)
    {
        case 222: this.acute = true; break;
    }
}

alheimr.text_line.prototype.get_bounding_box = function get_bounding_box()
{
    var b_box_min = new three.Vector3(0, 0, 0);
    var w = this.get_width();
    var h = this.get_height();
    var b_box_max = new three.Vector3(w, h, 0);

    var b_box = new three.Box3(b_box_min, b_box_max);

    return b_box;
}

// private

alheimr.text_line.prototype.clear_text = function clear_text()
{
    for (var i = 0; i < this.letters.length; i++)
    {
        this.remove(this.letters[i]);
    }
    
    this.letters = [];

    this.letter_pos.x = 0;
    this.letter_pos.y = 0;
    this.letter_pos.z = 0;
}

alheimr.text_line.prototype.insert_character = function insert_character(char)
{
    var index = this.cursor.position_index++;

    var str = this.text.substr(0, index) + char + this.text.substr(index);
    this.set_text(str);

    var letter = this.letters[index];
    this.cursor.position.x = letter.position.x + letter.half_width + this.letter_spacing / 2;
}

alheimr.text_line.prototype.remove_character = function remove_character(del)
{
    if (this.cursor.position_index === 0)
    {
        return;
    }

    var index;
    if (del)
    {
        index = this.cursor.position_index;
    }
    else
    {
        index = --this.cursor.position_index;
    }
    
    var str1 = this.text.substr(0, index);
    var str2 = this.text.substr(index + 1);
    this.set_text(str1 + str2);

    if (this.letters.length === 0)
    {
        this.cursor.position.x = -this.letter_spacing / 2;
        return;
    }
    else if (index === this.letters.length)
    {
        index--;
        var letter = this.letters[index];
        this.cursor.position.x = letter.position.x + letter.half_width + this.letter_spacing / 2;
    }
    else
    {
        var letter = this.letters[index];
        this.cursor.position.x = letter.position.x - letter.half_width - this.letter_spacing / 2;
    }
}
