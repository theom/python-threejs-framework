
// @author theom / https://www.axonehf.com

allteria.one_shot = function one_shot(world, name)
{
    allteria.entity.call(this, world, name);

    this.triggered = false;
}

allteria.extend(allteria.one_shot, allteria.entity);

allteria.one_shot.prototype.run = function run()
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
