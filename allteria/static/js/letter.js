
// @author theom / https://www.axonehf.com

allteria.letter = function letter(character)
{
    allteria.ui_component.call(this);

    this.character = character;
    this.material = new three.LineBasicMaterial({ color: 0x000000, linewidth: 0.7 });
    var obj = allteria.letters[character];
    this.half_width = obj.userData.half_width;
    this.base = obj.userData.base;
    this.height = 5.5;

    var self = this;
    obj.traverse(function(mesh)
                 {
                     mesh.material = self.material;
                 });

    this.add(obj.clone());

    var g = new three.PlaneGeometry(this.half_width * 4.7, this.height);
    var m = new three.MeshBasicMaterial();
    var p = new three.Mesh(g, m);
    p.visible = false;
    this.add(p);

    g = new three.Geometry();
    g.vertices.push(new three.Vector3(-1.0, -2.0, 0));
    g.vertices.push(new three.Vector3(-1.0,  2.5, 0));
    g.vertices.push(new three.Vector3( 1.0,  2.5, 0));
    g.vertices.push(new three.Vector3( 1.0, -2.0, 0));
    g.vertices.push(new three.Vector3(-1.0, -2.0, 0));
    m = new three.LineBasicMaterial({color: 0xff0000});
    this.frame_lines = new three.Line(g, m);
    this.frame_lines.visible = false;
    this.add(this.frame_lines);
}

allteria.extend(allteria.letter, allteria.ui_component);

allteria.letter.prototype.set_position = function set_position(pos)
{
    this.position.set(pos.x, pos.y, pos.z);
}

allteria.letter.prototype.get_position = function get_position()
{
    return this.position;
}

allteria.letter.prototype.set_scale = function set_scale(s)
{
    this.scale.x = s;
    this.scale.y = s;
    this.scale.z = s;
    this.half_width *= s;
    this.base *= s;
}

allteria.letter.prototype.get_half_width = function get_half_width()
{
    return this.half_width;
}

allteria.letter.prototype.get_scale = function get_scale()
{
    return this.scale.x;
}

allteria.letter.prototype.frame = function frame(visible)
{
    this.frame_lines.visible = visible;
}
