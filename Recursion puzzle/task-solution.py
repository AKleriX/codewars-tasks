import sys
sys.setrecursionlimit(4000)

def make_nested_list(n):
  if n == 0:
    return []
  return [make_nested_list(n - 1)]

puzzle = make_nested_list(2990)