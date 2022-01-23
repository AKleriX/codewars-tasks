const createIterator = (func, n) => (num) => {
    let result = num;
    for (let i = 1; i <= n; i++)
      result = func(result);
    return result;
    };