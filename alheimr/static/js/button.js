
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

alheimr.button = function button(text)
{
    alheimr.ui_component.call(this);

    this.text = new alheimr.text_line(text);

    this.width = 1.2 * this.text.get_width();
    this.height = 1.8 * this.text.get_height();
    this.enabled = true;
    
    this.text.translateX(-this.text.get_width() / 2);
    this.add(this.text);
    
    var geo = new three.PlaneGeometry(this.width, this.height);
    var mat = new three.MeshBasicMaterial({color: 0x00dd00});
    this.background = new three.Mesh(geo, mat);
    this.add(this.background);

    // Enable hit detection on all the children
    var self = this;
    this.traverse(function(mesh)
                  {
                      mesh.comp = self;
                  });
}

alheimr.extend(alheimr.button, alheimr.ui_component);

alheimr.button.prototype.on_mouse_down = function on_mouse_down(event)
{
    if (this.on_click)
    {
        this.on_click(event);
    }
}

alheimr.button.prototype.on_mouse_enter = function on_mouse_enter(event)
{
    if (this.enabled)
    {
        document.body.style.cursor = "pointer";
    }
}

alheimr.button.prototype.on_mouse_leave = function on_mouse_enter(event)
{
    document.body.style.cursor = "default";
}

alheimr.button.prototype.get_bounding_box = function get_bounding_box()
{
    this.background.geometry.computeBoundingBox();
    return this.background.geometry.boundingBox.clone();
}
    
