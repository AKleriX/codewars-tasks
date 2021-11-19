function pascalsTriangle(n) {
    let pasTriangle = [];
    for (let i = 0; i < n; i++){
        let currentRow = [],
            lastRow = i > 1 ? pasTriangle.slice(pasTriangle.length - i) : [];
        for (let j = 0; j <= i; j++){
            if (j > 0 && j < i)
                currentRow.push(lastRow[j - 1] + lastRow[j]);
            else currentRow.push(1);
        }
        pasTriangle.push(...currentRow);
    }
    return pasTriangle;
}