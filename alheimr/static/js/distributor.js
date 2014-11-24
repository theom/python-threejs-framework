
// @author theom / https://www.axonehf.com

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
