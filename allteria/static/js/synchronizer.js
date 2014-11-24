
// @author theom / https://www.axonehf.com

allteria.synchronizer = function synchronizer(world, name)
{
    allteria.entity.call(this, world, name);

    this.synced = {};
}

allteria.extend(allteria.synchronizer, allteria.entity);

allteria.synchronizer.prototype.run = function run()
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
