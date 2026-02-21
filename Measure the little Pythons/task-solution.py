class SnakeEye:
    HEAD_LEN = 5
    SEG_LEN = 2 

    def __init__(self, *, _snake=False, _tongue=">"):
        self._snake = _snake
        self._tongue = _tongue
        self._segments = 0


    def __gt__(self, other):
        return SnakeEye(_snake=True, _tongue=">")

    def __lt__(self, other):
        return SnakeEye(_snake=True, _tongue="<")


    def __sub__(self, other):
        self._segments += 1
        return self

    def __len__(self):
        return self.HEAD_LEN + self._segments * self.SEG_LEN