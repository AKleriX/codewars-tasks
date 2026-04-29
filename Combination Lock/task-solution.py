def degrees_of_lock(initial, first, second, third):
    return 1080 + 9 * ((initial - first) % 40 + (second - first) % 40 + (second - third) % 40)