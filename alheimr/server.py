
# Copyright 2014 Jens Páll Hafsteinsson
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

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
