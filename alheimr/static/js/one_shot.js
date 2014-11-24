
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

alheimr.one_shot = function one_shot(world, name)
{
    alheimr.entity.call(this, world, name);

    this.triggered = false;
}

alheimr.extend(alheimr.one_shot, alheimr.entity);

alheimr.one_shot.prototype.run = function run()
{
    console.log("one_shot.run: " + this.name);
    
    // Read from the input queue so it won't fill up if the trigger has already fired
    var msg = this.input_queue.pop();

    if (this.triggered)
    {
        return;
    }

    msg.to = this.receivers[0];
    this.send(msg);
}
