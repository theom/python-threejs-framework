
import socket

import tornado.ioloop
import tornado.web

from ZEO import ClientStorage
from ZODB import DB
import transaction

from allteria.main_handler import *
from allteria.websocket_handler import *
from allteria.router import *
from allteria.aqueue import *

addr = socket.gethostname(), 9100
storage = ClientStorage.ClientStorage(addr)
db = DB(storage)
conn = db.open()

main_loop = tornado.ioloop.IOLoop.instance()

application = tornado.web.Application(
    [
        (r"/", main_handler),
        (r"/ws", websocket_handler),
        (r"/(.*)", tornado.web.StaticFileHandler, {"path": "../allteria/static"})
    ],
    debug=True)

application.listen(8000)
main_loop.start()
