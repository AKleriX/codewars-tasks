function findOdd(A) {
    let dic = new Map();
    A.forEach(num => dic.has(num) ? dic.set(num, dic.get(num) + 1) : dic.set(num, 1));
    for (let [key, value] of dic)
        if (value % 2 !== 0)
            return key;
    return 0;
}