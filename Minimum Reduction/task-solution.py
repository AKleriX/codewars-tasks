from bisect import bisect_right

def min_remove(A):
    A = sorted(A)
    return 0 if A[0] == A[-1] else len(A) - max(
        bisect_right(A, x * x) - i for i, x in enumerate(A)
    )