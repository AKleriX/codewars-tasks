class Grid():
    def __init__(self, width, height):
        self.a=[['0']*width for _ in range(height)]
        self.grid='\n'.join(''.join(r) for r in self.a)
    def plot_point(self, x, y):
        self.a[y-1][x-1]='X'
        self.grid='\n'.join(''.join(r) for r in self.a)
    def __repr__(self):
        return self.grid