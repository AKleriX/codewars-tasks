const uniqueSum = (lst) => (lst.length ? [...new Set(lst)].reduce((s, n) => s + n) : null);
