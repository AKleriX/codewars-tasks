function partsSums(ls) {
    let sums = [ls.reduce((sum, num) => sum + num, 0)];
    return ls.reduce((sum, num, index) => {
        sum.push(sum[index] - num)
        return sum;
    }, sums);
}