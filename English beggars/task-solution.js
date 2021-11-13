function beggars(values, n){
    let beggars = [],
        beggarsIndex = 0;
    values.sort((a,b) => a - b).forEach(num => {
        beggars[beggarsIndex] = beggars[beggarsIndex] ? beggars[beggarsIndex] + num : num;
        beggarsIndex++;
        if (beggarsIndex >= n) beggarsIndex = 0;
    });
    if (beggars.length < n)
        beggars = beggars.concat([...new Array(n - beggars.length)].map(() => 0));
    return n ? beggars : [];
}