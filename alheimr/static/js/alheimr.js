
// @author theom / https://www.axonehf.com

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
