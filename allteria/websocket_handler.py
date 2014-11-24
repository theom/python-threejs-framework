
import sys
import tornado.ioloop
import tornado.websocket
import base64
import Crypto.Hash.SHA512
import Crypto.Random.random
import time
from allteria.lz_string import *

class websocket_handler(tornado.websocket.WebSocketHandler):

    def open(self):
        print("new connection")
        self.name = "allteria"
        self.stack = []
        self.connection_open = True
        self.heart = tornado.ioloop.PeriodicCallback(self.heartbeat, 90000)
        self.heart.start()

        self.words = {
            "to"  : self.handle_to,
            "from": self.handle_from,
            "load": self.handle_load
            }

        b = bytearray((Crypto.Random.random.randint(0,255)) for i in range(256))
        h = Crypto.Hash.SHA512.new()
        h.update(b)
        self.client_identity = h.hexdigest()
        self.write_message(self.client_identity + " identity")
        #self.send_image("../allteria//static/images/image1.jpg")

    def on_message(self, message):
        if self.connection_open:
            # try:
                print("message received: '{}'".format(message))
                self.parse_message(message);
            # except:
            #     print("send exception: connection closed")
            #     self.connection_open = False

    def on_close(self):
        print("connection closed")
        self.close();
        self.connection_open = False

    def heartbeat(self):
        print("ping")
        try:
            self.write_message(self.name + " from ping")
        except tornado.websocket.WebSocketClosedError:
            print("ping exception: connection closed")
            self.heart.stop()
            self.heart = None

    # private

    def send_image(self, image_path):
        print("sending image")
        b64 = base64.encodestring(open(image_path, "rb").read())
        self.write_message(b64.decode() + " image")
        
    def parse_message(self, message):
        self.reset()
        words = message.split()
        for word in words:
            try:
                self.words.get(word)()
            except TypeError:
                self.stack.append(word)

    def reset(self):
        self.message_from = ""
        self.message_to = ""

    def handle_to(self):
        self.message_to = self.stack.pop()

    def handle_from(self):
        self.message_from = self.stack.pop()
        
    def handle_load(self):
        name = self.stack.pop()
        name = name.replace(".", "").replace("/", "").replace(";", "").replace(":", "").replace("#", "").replace("*", "").replace("?", "")
        f_name = "../allteria/static/js/" + name + ".js"
        print("reading " + f_name)
        f = open(f_name, "r")
        content = f.read()
        lzs = lz_string()
        b64 = lzs.compress_to_base64(content)
        msg = self.message_from + " to " + self.name + " from " + b64 + " decompressb64 code"
        self.write_message(msg)
        
