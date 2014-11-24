
// @author theom, https://www.axonehf.com

// @constructor
alheimr.letter = function letter(character)
{
    alheimr.ui_component.call(this);

    this.character = character;
    this.material = new three.LineBasicMaterial({ color: 0x000000, linewidth: 0.7 });
    var obj = alheimr.letters[character];
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

alheimr.extend(alheimr.letter, alheimr.ui_component);

// @public
alheimr.letter.prototype.set_position = function set_position(pos)
{
    this.position.set(pos.x, pos.y, pos.z);
}

// @public
alheimr.letter.prototype.get_position = function get_position()
{
    return this.position;
}

// @public
alheimr.letter.prototype.set_scale = function set_scale(s)
{
    this.scale.x = s;
    this.scale.y = s;
    this.scale.z = s;
    this.half_width *= s;
    this.base *= s;
}

// @public
alheimr.letter.prototype.get_half_width = function get_half_width()
{
    return this.half_width;
}

// @public
alheimr.letter.prototype.get_scale = function get_scale()
{
    return this.scale.x;
}

// @public
alheimr.letter.prototype.frame = function frame(visible)
{
    this.frame_lines.visible = visible;
}

//# sourceURL=letter.js
