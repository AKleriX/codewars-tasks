def calculate(price_dict, transaction):
    total = i = 0
    seen = {}
    n = len(transaction)
    while i < n:
        if transaction[i].isalpha():
            item = transaction[i]
            if seen.get(item):
                total -= seen[item].pop() * price_dict[item]
            i += 1
        else:
            j = i + (transaction[i] == "-")
            while transaction[j].isdigit():
                j += 1
            qty = int(transaction[i:j])
            item = transaction[j]
            seen.setdefault(item, []).append(qty)
            total += qty * price_dict[item]
            i = j + 1
    return total