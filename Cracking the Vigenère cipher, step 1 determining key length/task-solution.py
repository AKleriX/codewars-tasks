from collections import Counter

def get_key_length(s, max_key_length):
    n = len(s)
    def ic(t):
        m = len(t)
        return sum(v*(v-1) for v in Counter(t).values()) / (m*(m-1)) if m > 1 else 0
    A = [0] + [sum(s[i] == s[i-k] for i in range(k, n)) for k in range(1, max_key_length + 1)]
    a = [0] + [(A[k] / (n - k)) for k in range(1, max_key_length + 1)]
    I = [0] + [sum(ic(s[i::k]) for i in range(k)) / k for k in range(1, max_key_length + 1)]
    S = [0] + [I[k] + 0.5 * a[k] for k in range(1, max_key_length + 1)]
    k = max(range(1, max_key_length + 1), key=S.__getitem__)
    while k * 2 <= max_key_length and a[k * 2] >= a[k] * 0.95 and I[k * 2] >= I[k] * 0.98:
        k *= 2
    return k