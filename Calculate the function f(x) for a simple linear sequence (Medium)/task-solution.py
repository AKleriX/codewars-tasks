def get_function(sequence):
    k = sequence[1] - sequence[0]
    for i in range(2, len(sequence)):
        if k != (sequence[i] - sequence[i - 1]):
            return "Non-linear sequence"
    return lambda x: k * x + sequence[0]