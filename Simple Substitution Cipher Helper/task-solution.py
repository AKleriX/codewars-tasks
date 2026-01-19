class Cipher:
    def __init__(self, map1, map2):
        self.map1 = map1
        self.map2 = map2

    def encode(self, string):
        return "".join([self.map2[self.map1.index(s)] if s in self.map1 else s for s in string])

    def decode(self, string):
        return "".join([self.map1[self.map2.index(s)] if s in self.map2 else s for s in string])