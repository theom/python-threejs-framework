
// @author theom / https://www.axonehf.com

allteria.entity = function entity(world, name)
{
    this.world = world;
    this.name = name;
    this.stack = [];
    
    this.input_queue = [];    // Messages arrive through here
    this.output_queue = [];   // Messages are sent out through here
    
    this.senders = [];        // Names that will send me messages
    this.receivers = [];     // Names that I will send messages to
}

allteria.entity.prototype.connect_input = function connect_input(queue)
{
    this.input_queue = queue;
}

allteria.entity.prototype.connect_output = function connect_output(queue)
{
    this.output_queue = queue;
}

allteria.entity.prototype.connect_sender = function connect_sender(name)
{
    this.senders.push(name) 
}

allteria.entity.prototype.connect_receiver = function connect_receiver(name)
{
    this.receivers.push(name);
}

allteria.entity.prototype.send = function send(msg)
{
    this.output_queue.push(msg);
}
