
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

alheimr.checkbox = function checkbox(label)
{
    alheimr.ui_component.call(this);

    this.width = 4;
    this.height = 4;
    this.set_scale(4);
    this.checked = false;

    var geo;
    var mat;
    
    this.label = new alheimr.text_line(label, this.scale.x / 3.5);
    this.label.translateX(-(this.label.get_width() + this.width));
    this.add(this.label);
    
    var x = this.width / 2;
    var y = this.width / 2;
    geo = new three.Geometry();
    geo.vertices.push(new three.Vector3(-x, -y, 0));
    geo.vertices.push(new three.Vector3(-x,  y, 0));
    geo.vertices.push(new three.Vector3( x,  y, 0));
    geo.vertices.push(new three.Vector3( x, -y, 0));
    geo.vertices.push(new three.Vector3(-x, -y, 0));
    mat = new three.LineBasicMaterial({color: 0x000000});
    this.border = new three.Line(geo, mat);
    this.add(this.border);

    x /= 2;
    y /= 2;
    var shape = new three.Shape();
    shape.moveTo(0.0, -1.5);
    shape.lineTo(0.5, -0.6);
    shape.lineTo(1.1, 0.2);
    shape.lineTo(1.6, 0.6);
    shape.lineTo(1.3, 0.8);
    shape.lineTo(1.1, 1.2);
    shape.lineTo(1.0, 1.6);
    shape.lineTo(0.7, 1.1);
    shape.lineTo(0.4, 0.7);
    shape.lineTo(0.2, 0.2);
    shape.lineTo(0.0, -0.4);
    shape.lineTo(-0.4, 0.0);
    shape.lineTo(-0.7, 0.5);
    shape.lineTo(-1.4, -0.4);
    shape.lineTo(-0.8, -0.6);
    shape.lineTo(-0.4, -0.9);
    shape.lineTo(0.0, -1.5);
    geo = new three.ShapeGeometry(shape);
    geo.vertices.push(new three.Vector3(-x,  0.0, 0));
    geo.vertices.push(new three.Vector3( 0.0, -y, 0));
    geo.vertices.push(new three.Vector3( x,    y, 0));
    mat = new three.MeshBasicMaterial({color: 0x000000});
    this.checkmark = new three.Mesh(geo, mat);
    this.checkmark.visible = this.checked;
    this.checkmark.comp = this;
    this.add(this.checkmark);

    geo = new three.PlaneGeometry(this.width, this.height);
    mat = new three.MeshBasicMaterial({color: 0xffff00});
    this.background = new three.Mesh(geo, mat);
    this.background.comp = this;
    this.add(this.background);
}

alheimr.extend(alheimr.checkbox, alheimr.ui_component);

alheimr.checkbox.prototype.set_position = function set_position(pos)
{
    this.position.set(pos.x, pos.y, pos.z);
}

alheimr.checkbox.prototype.get_position = function get_position()
{
    return this.position;
}

alheimr.checkbox.prototype.set_scale = function set_scale(s)
{
    this.scale.x = s;
    this.scale.y = s;
}

alheimr.checkbox.prototype.get_scale = function get_scale()
{
    return this.scale.x;
}

alheimr.checkbox.prototype.on_mouse_down = function on_mouse_down(event)
{
    if (this.checked)
    {
        this.checked = false;
        this.checkmark.visible = false;
        this.on_checked(event);
    }
    else
    {
        this.checked = true;
        this.checkmark.visible = true;
        this.on_unchecked(event);
    }
}

alheimr.checkbox.prototype.on_checked = function on_checked(event)
{
}

alheimr.checkbox.prototype.on_unchecked = function on_unchecked(event)
{
}

alheimr.checkbox.prototype.set_editable = function set_editable(editable)
{
    this.label.set_editable(editable);
}

alheimr.checkbox.prototype.get_bounding_box = function get_bounding_box()
{
    var b_box_min = new three.Vector3(-(this.label.get_width() + this.width), 0, 0);
    var b_box_max = new three.Vector3(0, Math.max(this.label.get_height(), this.height), 0);

    var b_box = new three.Box3(b_box_min, b_box_max);

    return b_box;
}
