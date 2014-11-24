
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

alheimr = {};

alheimr.extend = function(child, parent)
{
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;

    if (arguments.length > 2)
    {
        for (var i = 2; i < arguments.length; i++)
        {
            var mixin = arguments[i];
            for (var method in mixin.prototype)
            {
                child.prototype[method] = mixin.prototype[prop];
            }
        }
    }
}

three = THREE;
tween = TWEEN;
