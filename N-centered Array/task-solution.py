def is_centered(xs: list[int], n: int) -> bool:
    m = len(xs)
    return any(sum(xs[i:m - i]) == n for i in range(m // 2 + 1))