
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

import time
import tornado.ioloop

class router:

    def __init__(self, io_loop, name):
        self.io_loop = io_loop
        self.name = name
        self.input_queues = {}
        self.output_queues = {}
        
    def schedule(self):
        print("scheduling {}".format(self.name))
        self.io_loop.add_callback(self.run)
        
    def run(self):
        #print("router run: {0}".format(self.name))
        self.deliver_messages()
        self.io_loop.call_later(1, self.run)

    def connect_input_queue(self, queue, remote_name):
        self.input_queues[remote_name] = queue

    def connect_output_queue(self, queue, remote_name):
        self.output_queues[remote_name] = queue
        
    def deliver_messages(self):
        for from_queue, name in self.input_queues.items():
            if from_queue.empty():
                continue
            msg = from_queue.peek()
            dest = msg.get_destination(self.level)
            if dest in self.output_queues:
                to_queue = self.output_queues[dest]
                try:
                    to_queue.put(msg, False)
                    from_queue.get()
                except queue.Full:
                    pass
            else:
                print("{}: unknown destination: {}".format(self.name, dest))
                
            
