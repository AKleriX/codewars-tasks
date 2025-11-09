def flood_fill(array, y, x, new_value):
    if not array or not array[0]:
        return array
    old = array[y][x]
    if old == new_value:
        return array
    h, w = len(array), len(array[0])
    stack = [(y, x)]
    array[y][x] = new_value
    while stack:
        cy, cx = stack.pop()
        for ny, nx in ((cy-1, cx), (cy+1, cx), (cy, cx-1), (cy, cx+1)):
            if 0 <= ny < h and 0 <= nx < w and array[ny][nx] == old:
                array[ny][nx] = new_value
                stack.append((ny, nx))
    return array