function findNb(m) {
    let sum = 0,
        n_temp = 1,
        n = n_temp;

    while (sum < m) {
        sum += Math.pow(n_temp, 3);
        n = n_temp;
        n_temp++;
    }

    if (sum === m)
        return n;
    else
        return -1;
}