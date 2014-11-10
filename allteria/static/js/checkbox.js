
// @author theom / https://www.axonehf.com

allteria.checkbox = function checkbox(label)
{
    allteria.ui_component.call(this);

    this.width = 4;
    this.height = 4;
    this.set_scale(4);
    this.checked = false;

    var geo;
    var mat;
    
    this.label = new allteria.text_line(label, this.scale.x / 3.5);
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

allteria.extend(allteria.checkbox, allteria.ui_component);

allteria.checkbox.prototype.set_position = function set_position(pos)
{
    this.position.set(pos.x, pos.y, pos.z);
}

allteria.checkbox.prototype.get_position = function get_position()
{
    return this.position;
}

allteria.checkbox.prototype.set_scale = function set_scale(s)
{
    this.scale.x = s;
    this.scale.y = s;
}

allteria.checkbox.prototype.get_scale = function get_scale()
{
    return this.scale.x;
}

allteria.checkbox.prototype.on_mouse_down = function on_mouse_down(event)
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

allteria.checkbox.prototype.on_checked = function on_checked(event)
{
}

allteria.checkbox.prototype.on_unchecked = function on_unchecked(event)
{
}

allteria.checkbox.prototype.set_editable = function set_editable(editable)
{
    this.label.set_editable(editable);
}
