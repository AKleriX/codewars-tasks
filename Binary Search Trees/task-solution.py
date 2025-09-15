class Tree(object):
    
    def __init__(self, root, left=None, right=None):
        assert root and type(root) == Node
        if left: assert type(left) == Tree and left.root < root
        if right: assert type(right) == Tree and root < right.root
        self.left = left
        self.root = root
        self.right = right
        
    def is_leaf(self):
        return not(self.left or self.right)
        
    def __str__(self):
        return f"[{self.root}]" if self.is_leaf() else f"[{self.left or '_'} {self.root} {self.right or '_'}]"

    def __eq__(self, o):
        return isinstance(o, Tree) and (self.root, self.left, self.right) == (o.root, o.left, o.right)
    
    def __ne__(self, o):
        return not self == o

class Node(object):
    
    def __init__(self, value, weight=1):
        self.value = value
        self.weight = weight
    
    def __str__(self):
        return str(self.value)   
    
    def __lt__(self, other):
        return self.value < other.value
    
    def __gt__(self, other):
        return self.value > other.value
    
    def __eq__(self, other):
        return self.value == other.value 

    def __ne__(self, other):
        return self.value != other.value 