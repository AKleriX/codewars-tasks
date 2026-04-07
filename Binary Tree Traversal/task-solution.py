# Pre-order traversal
def pre_order(node):
    return [] if node is None else [node.data] + pre_order(node.left) + pre_order(node.right)

# In-order traversal
def in_order(node):
    return [] if node is None else in_order(node.left) + [node.data] + in_order(node.right)

# Post-order traversal
def post_order(node):
    return [] if node is None else post_order(node.left) + post_order(node.right) + [node.data]