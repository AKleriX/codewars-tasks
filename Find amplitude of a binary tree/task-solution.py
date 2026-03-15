def tree_amplitude(root_node):
    def f(node, lo, hi):
        if not node:
            return hi - lo
        lo = min(lo, node.data)
        hi = max(hi, node.data)
        if not node.left and not node.right:
            return hi - lo
        return max(f(node.left, lo, hi), f(node.right, lo, hi))
    return 0 if not root_node else f(root_node, root_node.data, root_node.data)