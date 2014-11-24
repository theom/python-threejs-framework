
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

alheimr.image = function image(width)
{
    alheimr.ui_component.call(this);

    this.width = width || 200;
    this.enabled = true;
    
    var geo = new three.PlaneGeometry(this.width, this.width);
    this.texture = new three.Texture();
    var mat = new three.MeshBasicMaterial({map: this.texture});
    this.img = new three.Mesh(geo, mat);
    this.add(this.img);

    this.img.comp = this;
}

alheimr.extend(alheimr.image, alheimr.ui_component);

alheimr.image.prototype.set_image = function set_image(img_base64)
{
    var image = new Image();
    image.src = "data:image/jpg;base64," + img_base64;
    this.texture.image = image;
    this.texture.needsUpdate = true;
}

alheimr.image.prototype.on_mouse_down = function on_mouse_down(event)
{
    if (this.on_click)
    {
        this.on_click(event);
    }
}

alheimr.image.prototype.on_mouse_enter = function on_mouse_enter(event)
{
    if (this.enabled)
    {
        document.body.style.cursor = "pointer";
    }
}

alheimr.image.prototype.on_mouse_leave = function on_mouse_enter(event)
{
    document.body.style.cursor = "default";
}

alheimr.image.prototype.get_bounding_box = function get_bounding_box()
{
    this.img.geometry.computeBoundingBox();
    return this.img.geometry.boundingBox.clone();
}
