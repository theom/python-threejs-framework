
import socket

import tornado.ioloop
import tornado.web

from ZEO import ClientStorage
from ZODB import DB
import transaction

from alheimr.main_handler import *
from alheimr.websocket_handler import *
from alheimr.router import *
from alheimr.aqueue import *

addr = socket.gethostname(), 9100
storage = ClientStorage.ClientStorage(addr)
db = DB(storage)
conn = db.open()

main_loop = tornado.ioloop.IOLoop.instance()

application = tornado.web.Application(
    [
        (r"/", main_handler),
        (r"/ws", websocket_handler),
        (r"/(.*)", tornado.web.StaticFileHandler, {"path": "../alheimr/static"})
    ],
    debug=True)

application.listen(8000)
main_loop.start()
