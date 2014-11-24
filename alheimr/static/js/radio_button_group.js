
// Copyright 2014 Jens Páll Hafsteinsson
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
