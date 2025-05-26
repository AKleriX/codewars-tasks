def alternate_sort(l):
  l_sorted = sorted(l, key=abs)
  negatives = [x for x in l_sorted if x < 0]
  non_negatives = [x for x in l_sorted if x >= 0]
  result = []
  while negatives or non_negatives:
    if negatives:
      result.append(negatives.pop(0))
    if non_negatives:
      result.append(non_negatives.pop(0))
  return result