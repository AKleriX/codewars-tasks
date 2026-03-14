from collections import Counter

def get_colors(col_arr):
    names = ['Red', 'Green', 'Blue']
    return ','.join(
        '+'.join(names[i] for i, _ in Counter(
            max(range(3), key=lambda i: int(c[i*2:i*2+2], 16))
            for c in group
        ).most_common())
        for group in col_arr
    )