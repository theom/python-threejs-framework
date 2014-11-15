
// @author theom / https://www.axonehf.com

allteria.image = function image(width)
{
    allteria.ui_component.call(this);

    this.width = width || 200;
    this.enabled = true;
    
    var geo = new three.PlaneGeometry(this.width, this.width);
    this.texture = new three.Texture();
    var mat = new three.MeshBasicMaterial({map: this.texture});
    this.img = new three.Mesh(geo, mat);
    this.add(this.img);

    this.img.comp = this;
}

allteria.extend(allteria.image, allteria.ui_component);

allteria.image.prototype.set_image = function set_image(img_base64)
{
    var image = new Image();
    image.src = "data:image/jpg;base64," + img_base64;
    this.texture.image = image;
    this.texture.needsUpdate = true;
}

allteria.image.prototype.on_mouse_down = function on_mouse_down(event)
{
    if (this.on_click)
    {
        this.on_click(event);
    }
}

allteria.image.prototype.on_mouse_enter = function on_mouse_enter(event)
{
    if (this.enabled)
    {
        document.body.style.cursor = "pointer";
    }
}

allteria.image.prototype.on_mouse_leave = function on_mouse_enter(event)
{
    document.body.style.cursor = "default";
}

allteria.image.prototype.get_bounding_box = function get_bounding_box()
{
    this.img.geometry.computeBoundingBox();
    return this.img.geometry.boundingBox.clone();
}
