
// @author theom / https://www.axonehf.com

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
