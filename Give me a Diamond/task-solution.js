function diamond(n){
    if (!(n % 2) || (n < 0)) return null;
    let diam = '*'.repeat(n) + '\n';
    for (let i = n - 2, spaces = 1; i >= 1; i -= 2, spaces++){
        diam = ' '.repeat(spaces) + '*'.repeat(i) + '\n' + diam + ' '.repeat(spaces) + '*'.repeat(i) + '\n';
    }
    return diam;
}