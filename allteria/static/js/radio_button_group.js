
// @author theom / https://www.axonehf.com

allteria.radio_button_group = function radio_button_group(label)
{
    allteria.ui_component.call(this);

    this.checked_button = undefined;
}

allteria.extend(allteria.radio_button_group, allteria.ui_component);

allteria.radio_button_group.prototype.set_position = function set_position(pos)
{
    this.position.set(pos.x, pos.y, pos.z);
}

allteria.radio_button_group.prototype.get_position = function get_position()
{
    return this.position;
}

allteria.radio_button_group.prototype.add = function add(radio_button)
{
    allteria.ui_component.prototype.add.call(this, radio_button);

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
