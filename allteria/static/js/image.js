
// @author theom / https://www.axonehf.com

allteria.image = function image(width)
{
    allteria.ui_component.call(this);

    this.width = width || 200;

    var geo = new three.PlaneGeometry(this.width, this.width);
    this.texture = new three.Texture();
    var mat = new three.MeshBasicMaterial({map: this.texture});
    var mesh = new three.Mesh(geo, mat);
    this.add(mesh);
}

allteria.extend(allteria.image, allteria.ui_component);

allteria.image.prototype.set_image = function set_image(img_base64)
{
    var image = new Image();
    image.src = "data:image/jpg;base64," + img_base64;
    this.texture.image = image;
    this.texture.needsUpdate = true;
}
