
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

alheimr.caller = function caller(world, name)
{
    alheimr.entity.call(this, world, name);
}

alheimr.extend(alheimr.caller, alheimr.entity);

alheimr.caller.prototype.set_method = function set_method(instance, method)
{
    this.instance = instance;
    this.method = method;
}

alheimr.caller.prototype.run = function run()
{
    console.log("caller.run: " + this.name);
    
    var msg = this.input_queue.pop();

    this.method.call(this.instance);
}
