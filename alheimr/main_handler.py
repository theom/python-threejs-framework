
import tornado.web

class main_handler(tornado.web.RequestHandler):

    def get(self):
        f = open("../alheimr/static/index.html", "r")
        self.write(f.read())
