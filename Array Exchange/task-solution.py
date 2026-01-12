def exchange_with(a, b):
    a[:], b[:] = put_elements(b), put_elements(a)
    
def put_elements(arr):
    new_arr = []
    for el in reversed(arr):
        new_arr.append(el)
    return new_arr