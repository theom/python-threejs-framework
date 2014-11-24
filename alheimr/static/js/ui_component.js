
// @author theom / https://www.axonehf.com

alheimr.ui_component = function ui_component(world)
{
    three.Object3D.call(this);

    this.world = world;
}

alheimr.extend(alheimr.ui_component, three.Object3D);

alheimr.ui_component.prototype.add = function add(comp)
{
    three.Object3D.prototype.add.call(this, comp);
}

alheimr.ui_component.prototype.run = function run()
{
}
