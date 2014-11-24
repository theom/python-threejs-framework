
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

alheimr.synchronizer = function synchronizer(world, name)
{
    alheimr.entity.call(this, world, name);

    this.synced = {};
}

alheimr.extend(alheimr.synchronizer, alheimr.entity);

alheimr.synchronizer.prototype.run = function run()
{
    console.log("synchronizer.run: " + this.name);
    
    var msg = this.input_queue.pop();

    this.synced[msg.from] = true;

    var all_synced = true;
    for (var i = 0; i < this.senders.length; i++)
    {
        var sender = this.senders[i];

        if (msg.from === sender)
        {
            this.synced[sender] = true;
        }

        if (!this.synced[sender])
        {
            all_synced = false;
        }
    }

    if (all_synced)
    {
        var new_msg = {};
        new_msg.to = this.receivers[0];
        new_msg.from = this.name;
        new_msg.payload = "";
        this.send(new_msg);
    }
}
