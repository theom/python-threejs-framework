
// @author theom / https://www.axonehf.com

allteria.ui_component = function ui_component()
{
    three.Object3D.call(this);
}

allteria.extend(allteria.ui_component, three.Object3D);

allteria.ui_component.prototype.add = function add(comp)
{
    three.Object3D.prototype.add.call(this, comp);
}

allteria.ui_component.prototype.run = function run()
{
}
