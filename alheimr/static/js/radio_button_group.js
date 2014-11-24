
// @author theom / https://www.axonehf.com

alheimr.radio_button_group = function radio_button_group(label)
{
    alheimr.ui_component.call(this);

    this.checked_button = undefined;
}

alheimr.extend(alheimr.radio_button_group, alheimr.ui_component);

alheimr.radio_button_group.prototype.set_position = function set_position(pos)
{
    this.position.set(pos.x, pos.y, pos.z);
}

alheimr.radio_button_group.prototype.get_position = function get_position()
{
    return this.position;
}

alheimr.radio_button_group.prototype.add = function add(radio_button)
{
    alheimr.ui_component.prototype.add.call(this, radio_button);

    var self = this;
    radio_button.on_mouse_down = function(event)
    {
        if (self.checked_button)
        {
            self.checked_button.uncheck(event);
        }
        self.checked_button = radio_button;
        radio_button.check(event);
    }
}
