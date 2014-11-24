
// @author theom / https://www.axonehf.com

alheimr.edge_navigator = function edge_navigator(world, camera)
{
    alheimr.ui_component.call(this, world);

    this.camera = camera;
    this.dx = 500;
    this.dy = 300;

    this.world.register_event_listener("mouse_out", this, this.on_mouse_out);
    this.world.register_event_listener("window_resize", this, this.on_window_resize);
    
    this.left_right_depth = 70;
    this.top_bottom_depth = 70;

    var geo;
    var mat;

    geo = new three.Geometry();
    geo.vertices.push(new three.Vector3(-1, -1, 0));
    geo.vertices.push(new three.Vector3(-1, 1, 0));
    geo.vertices.push(new three.Vector3(1, 0, 0));
    geo.vertices.push(new three.Vector3(-1, -1, 0));
    mat = new three.LineBasicMaterial({color: 0x00aa00, linewidth: 3, transparent: true, opacity: 0.5});
    var arrow = new three.Line(geo, mat);
    arrow.scale.x = 15;
    arrow.scale.y = 30;
    
    geo = new three.PlaneGeometry(1, 1);
    mat = new three.MeshBasicMaterial({color: 0xdbffdc, transparent: true, opacity: 0.5});
    this.right = new three.Mesh(geo, mat);
    this.right.translateZ(-10);
    this.right.comp = this;
    this.right.direction = "right";
    this.add(this.right);
    this.right_arrow = arrow.clone();
    this.add(this.right_arrow);
    this.show_right(false);
    
    geo = new three.PlaneGeometry(1, 1);
    mat = new three.MeshBasicMaterial({color: 0xdbffdc, transparent: true, opacity: 0.5});
    this.left = new three.Mesh(geo, mat);
    this.left.translateZ(-10);
    this.left.comp = this;
    this.left.direction = "left";
    this.add(this.left);
    this.left_arrow = arrow.clone();
    this.left_arrow.rotateZ(Math.PI);
    this.add(this.left_arrow);
    this.show_left(false);
    
    geo = new three.PlaneGeometry(1, 1);
    mat = new three.MeshBasicMaterial({color: 0xdbffdc, transparent: true, opacity: 0.5});
    this.top = new three.Mesh(geo, mat);
    this.top.translateZ(-10);
    this.top.comp = this;
    this.top.direction = "top";
    this.add(this.top);
    this.up_arrow = arrow.clone();
    this.up_arrow.rotateZ(Math.PI/2);
    this.add(this.up_arrow);
    this.show_top(false);

    geo = new three.PlaneGeometry(1, 1);
    mat = new three.MeshBasicMaterial({color: 0xdbffdc, transparent: true, opacity: 0.5});
    this.bottom = new three.Mesh(geo, mat);
    this.bottom.translateZ(-10);
    this.bottom.comp = this;
    this.bottom.direction = "bottom";
    this.add(this.bottom);
    this.down_arrow = arrow.clone();
    this.down_arrow.rotateZ(Math.PI*3/2);
    this.add(this.down_arrow);
    this.show_bottom(false);

    this.position_controls();
}

alheimr.extend(alheimr.edge_navigator, alheimr.ui_component);

alheimr.edge_navigator.prototype.on_mouse_down = function on_mouse_down(event)
{
    switch (event.object.object.direction)
    {
        case "right" : this.camera.translateX(this.dx); break;
        case "left"  : this.camera.translateX(-this.dx); break;
        case "top"   : this.camera.translateY(this.dy); break;
        case "bottom": this.camera.translateY(-this.dy); break;
    }
}

alheimr.edge_navigator.prototype.on_mouse_enter = function on_mouse_enter(event)
{
    document.body.style.cursor = "pointer";
    this.active = event.object.object.direction;
    switch (event.object.object.direction)
    {
        case "right" : this.show_right(true); break;
        case "left"  : this.show_left(true); break;
        case "top"   : this.show_top(true); break;
        case "bottom": this.show_bottom(true); break;
    }
}

alheimr.edge_navigator.prototype.on_mouse_leave = function on_mouse_enter(event)
{
    document.body.style.cursor = "default";
    this.hide_all();
}

alheimr.edge_navigator.prototype.on_mouse_out = function on_mouse_out(event)
{
    this.hide_all();
}

alheimr.edge_navigator.prototype.on_window_resize = function resize(event)
{
    this.position_controls();
}

// private

alheimr.edge_navigator.prototype.position_controls = function position_controls()
{
    var x_pos = (this.world.renderer.domElement.clientWidth - this.left_right_depth) / 2;
    var y_pos = (this.world.renderer.domElement.clientHeight - this.top_bottom_depth) / 2;

    this.right.scale.x = this.left_right_depth;
    this.right.scale.y = this.world.renderer.domElement.clientHeight;
    this.right.position.x = x_pos;
    this.right_arrow.position.x = x_pos

    this.left.scale.x = this.left_right_depth;
    this.left.scale.y = this.world.renderer.domElement.clientHeight;
    this.left.position.x = -x_pos;
    this.left_arrow.position.x = -x_pos

    this.top.scale.x = this.world.renderer.domElement.clientWidth;
    this.top.scale.y = this.top_bottom_depth;
    this.top.position.y = y_pos;
    this.up_arrow.position.y = y_pos

    this.bottom.scale.x = this.world.renderer.domElement.clientWidth;
    this.bottom.scale.y = this.top_bottom_depth;
    this.bottom.position.y = -y_pos;
    this.down_arrow.position.y = -y_pos
}

alheimr.edge_navigator.prototype.hide_all = function hide_all()
{
    this.show_right(false);
    this.show_left(false);
    this.show_top(false);
    this.show_bottom(false);
}

alheimr.edge_navigator.prototype.show_right = function show_right(visible)
{
    this.right.visible = visible;
    this.right_arrow.visible = visible;
}

alheimr.edge_navigator.prototype.show_left = function show_left(visible)
{
    this.left.visible = visible;
    this.left_arrow.visible = visible;
}

alheimr.edge_navigator.prototype.show_top = function show_top(visible)
{
    this.top.visible = visible;
    this.up_arrow.visible = visible;
}

alheimr.edge_navigator.prototype.show_bottom = function show_bottom(visible)
{
    this.bottom.visible = visible;
    this.down_arrow.visible = visible;
}
