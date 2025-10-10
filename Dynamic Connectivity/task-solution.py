class DynamicConnectivity(object):
    def __init__(self, n):
        self.parent = list(range(n))
        self.size = [1] * n

    def _find(self, x):
        while x != self.parent[x]:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x

    def union(self, p, q):
        a, b = self._find(p), self._find(q)
        if a == b:
            return
        if self.size[a] < self.size[b]:
            a, b = b, a
        self.parent[b] = a
        self.size[a] += self.size[b]

    def connected(self, p, q):
        return self._find(p) == self._find(q)