def pivot(two_dimensional_array, index_to_pivot):
    groups = {}
    
    for row in two_dimensional_array:
        pivot_val = row[index_to_pivot]
        
        if pivot_val not in groups:
            groups[pivot_val] = [None] * len(row)
        
        for i, val in enumerate(row):
            if i == index_to_pivot:
                groups[pivot_val][i] = pivot_val
            else:
                try:
                    num = float(val) if '.' in val else int(val)
                    groups[pivot_val][i] = (groups[pivot_val][i] or 0) + num
                except ValueError:
                    if groups[pivot_val][i] is None:
                        groups[pivot_val][i] = '-'
    
    return [groups[k] for k in sorted(groups)]