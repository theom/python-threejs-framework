
// @author theom / https://www.axonehf.com

alheimr.code_loader = function code_loader(world, name)
{
    alheimr.entity.call(this, world, name);

    this.lzs = new alheimr.lz_string();
}

alheimr.extend(alheimr.code_loader, alheimr.entity);

alheimr.code_loader.prototype.load = function load(module)
{
    this.module = module;
}

alheimr.code_loader.prototype.run = function run()
{
    console.log("code_loader.run: " + this.name);
    
    var msg = this.input_queue.pop();
    this.parse_message(msg.payload);
}

// private

alheimr.code_loader.prototype.parse_message = function parse_message(msg)
{
    var words = msg.split(" ");
    for (var i = 0; i < words.length; i++)
    {
        var word = words[i];
        switch (word)
        {
            case "load"          : this.request_code(); break;
            case "decompressb64" : this.decompress_from_base64(); break;
            case "code"          : this.register_code(); break;
            default              : this.stack.push(word);
        }
    }
}

alheimr.code_loader.prototype.request_code = function request_code()
{
    msg = {};
    msg.to = "alheimr.code";
    msg.from = this.name;
    msg.payload = this.module + " load";
    this.send(msg);
}

alheimr.code_loader.prototype.decompress_from_base64 = function decompress_from_base64()
{
    var tmp = this.lzs.decompress_from_base64(this.stack.pop());
    this.stack.push(tmp);
}

alheimr.code_loader.prototype.register_code = function register_code()
{
    var code_text = this.stack.pop();
    
    var s = document.createElement("script");
    s.type = "text/javascript";
    var c = document.createTextNode(code_text);
    s.appendChild(c);
    document.body.appendChild(s);

    var new_msg = {};
    new_msg.to = this.receivers[0];
    new_msg.from = this.name;
    new_msg.payload = "loaded";
    this.send(new_msg);
}
