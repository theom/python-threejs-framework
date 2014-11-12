
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
                
            
