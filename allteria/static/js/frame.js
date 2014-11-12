
// @author theom / https://www.axonehf.com

allteria.frame = function frame()
{
    allteria.ui_component.call(this);

    this.width = 700;
    this.height =200;
    this.border = 20;
    var geo = new three.PlaneGeometry(this.width + 2*this.border, this.height + 2*this.border);
    var mat = new three.MeshBasicMaterial({color: 0xeeeeee});
    this.background = new three.Mesh(geo, mat);
    this.background.translateZ(-0.1);
    this.background.translateY(-this.height/2);
    allteria.ui_component.prototype.add.call(this, this.background);
}

allteria.extend(allteria.frame, allteria.ui_component);

allteria.frame.prototype.set_position = function set_position(pos)
{
    this.position.set(pos.x, pos.y, pos.z);
}

allteria.frame.prototype.get_position = function get_position()
{
    return this.position;
}

allteria.frame.prototype.add = function add(comp)
{
    allteria.ui_component.prototype.add.call(this, comp);
}
