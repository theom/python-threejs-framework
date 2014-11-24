
// @author theom / https://www.axonehf.com

allteria.caller = function caller(world, name)
{
    allteria.entity.call(this, world, name);
}

allteria.extend(allteria.caller, allteria.entity);

allteria.caller.prototype.set_method = function set_method(instance, method)
{
    this.instance = instance;
    this.method = method;
}

allteria.caller.prototype.run = function run()
{
    console.log("caller.run: " + this.name);
    
    var msg = this.input_queue.pop();

    this.method.call(this.instance);
}
