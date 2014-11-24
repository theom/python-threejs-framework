
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

alheimr.entity = function entity(world, name)
{
    this.world = world;
    this.name = name;
    this.stack = [];
    
    this.input_queue = [];    // Messages arrive through here
    this.output_queue = [];   // Messages are sent out through here
    
    this.senders = [];        // Names that will send me messages
    this.receivers = [];     // Names that I will send messages to
}

alheimr.entity.prototype.connect_input = function connect_input(queue)
{
    this.input_queue = queue;
}

alheimr.entity.prototype.connect_output = function connect_output(queue)
{
    this.output_queue = queue;
}

alheimr.entity.prototype.connect_sender = function connect_sender(name)
{
    this.senders.push(name) 
}

alheimr.entity.prototype.connect_receiver = function connect_receiver(name)
{
    this.receivers.push(name);
}

alheimr.entity.prototype.send = function send(msg)
{
    this.output_queue.push(msg);
}
