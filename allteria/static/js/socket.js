
// @author joewalnes / https://github.com/joewalnes/reconnecting-websocket
// @author theom / https://www.axonehf.com

allteria.socket = function socket(url, protocols)
{
    this.url = url;
    this.protocols = protocols || [];

    this.debug = false;
    this.reconnect_interval = 1000;
    this.reconnect_decay = 1.0;
    this.reconnect_attepmts = 0;
    this.timeout_interval = 2000;
    this.forced_close = false;
    this.timed_out = false;

    this.readyState = WebSocket.CONNECTING;

    this.connect(false);
}

allteria.socket.prototype.connect = function connect(reconnect_attempt)
{
    this.ws = new WebSocket(this.url, this.protocols);
    
    if (!reconnect_attempt)
    {
        this.onconnecting();
    }

    if (this.debug)
    {
        console.debug("allteria.socket", "attempt-connect", url);
    }

    var self = this;
    var timeout = setTimeout(function()
                             {
                                 if (self.debug)
                                 {
                                     console.debug("allteria.socket", "connection-timeout", self.url);
                                 }
                                 self.timed_out = true;
                                 self.ws.close();
                                 self.timed_out = false;
                             }, this.timeout_interval);

    this.ws.onopen = function(event)
    {
        clearTimeout(timeout);
        
        if (self.debug)
        {
            console.debug("allteria.socket", "WebSocket.onopen", self.url);
        }

        self.readyState = WebSocket.OPEN;
        reconnect_attempt = false;
        self.reconnect_attempts = 0;
        
        self.onopen(event);
    };

    this.ws.onclose = function(event)
    {
        clearTimeout(timeout);

        this.ws = null;

        if (this.forced_close)
        {
            self.readyState = WebSocket.CLOSED;
            self.onclose(event);
        }
        else
        {
            self.readyState = WebSocket.CONNECTING;
            self.onconnecting();
            if (!reconnect_attempt && !self.timed_out)
            {
                if (self.debug)
                {
                    console.debug("allteria.socket", "WebSocket.onclose", self.url);
                }
                self.onclose(event);
            }

            setTimeout(function()
                       {
                           self.reconnect_attempts++;
                           self.connect(true);
                       }, self.reconnect_interval * Math.pow(self.reconnect_decay, self.reconnect_attempts));
        }
    };

    this.ws.onmessage = function(event)
    {
        if (self.debug)
        {
            console.debug("allteria.socket", "WebSocket.onmessage", self.url)
        }
        self.onmessage(event);
    };

    this.ws.onerror = function(event)
    {
        if (self.debug)
        {
            console.debug("allteria.socket", "WebSocket.onerror", self.url);
        }
        self.onerror(event);
    }
}

allteria.socket.prototype.send = function sent(data)
{
    if (this.ws)
    {
        if (this.debug)
        {
            console.debug("allteria.socket", "send", this.url, data);
        }
        return this.ws.send(data);
    }
    else
    {
        throw "Socket not connected. Will try to reconnect in a while.";
    }
}

allteria.socket.prototype.close = function close()
{
    this.forced_close = true;
    if (this.ws)
    {
        this.ws.close();
    }
}

// This will initiate a reconnect if the socket is closed
allteria.socket.prototype.refresh = function refresh()
{
    if (this.ws)
    {
        this.ws.close();
    }
}

allteria.socket.prototype.onopen = function onopen(event)
{
}

allteria.socket.prototype.onclose = function onclose(event)
{
}

allteria.socket.prototype.onconnecting = function onconnecting(event)
{
}

allteria.socket.prototype.onmessage = function onmessage(event)
{
}

allteria.socket.prototype.onerror = function onerror(event)
{
}
