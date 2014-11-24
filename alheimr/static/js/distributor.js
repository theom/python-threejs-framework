
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

alheimr.distributor = function distributor(world, name)
{
    alheimr.entity.call(this, world, name);
}

alheimr.extend(alheimr.distributor, alheimr.entity);

alheimr.distributor.prototype.run = function run()
{
    console.log("distributor.run: " + this.name);
    
    var msg = this.input_queue.pop();

    for (var i = 0; i < this.receivers.length; i++)
    {
        var new_msg = {};
        new_msg.to = this.receivers[i];
        new_msg.payload = msg.payload;
        this.send(new_msg);
    }
}
