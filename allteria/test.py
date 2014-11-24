
class test:

    def __init__(self):
        self.case = {
            "a": self.a,
            "b": self.b
        }
        
    def a(self):
        print("function a")

    def b(self):
        print("function b")

    def default(self):
        print("function default")

    def parse(self, opt):
        try:
            self.case.get(opt)()
        except TypeError:
            self.default()

t = test()
t.parse("a")
t.parse("c")
