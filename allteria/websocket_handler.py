
import sys
import tornado.ioloop
import tornado.websocket

class websocket_handler(tornado.websocket.WebSocketHandler):

    def open(self):
        print("new connection")
        self.connection_open = True
        self.heart = tornado.ioloop.PeriodicCallback(self.heartbeat, 30000)
        self.heart.start()
        self.write_message("identify")

    def on_message(self, message):
        if self.connection_open:
            try:
                print("message received: '{}'".format(message))
            except:
                self.connection_open = False

    def on_close(self):
        print("connection closed")
        self.close();
        self.connection_open = False

    def heartbeat(self):
        print("ping")
        try:
            self.write_message("ping")
        except tornado.websocket.WebSocketClosedError:
            print("Ping exception: socket closed")
            self.heart.stop()
            self.heart = None
