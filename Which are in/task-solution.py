def in_array(array1, array2):
    s2 = "\n".join(array2)
    return sorted({s1 for s1 in array1 if s1 in s2})