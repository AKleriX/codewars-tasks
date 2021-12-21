function howmuch(m, n) {
    let moneyVariants = [];
    for (let i = Math.min(m, n); i <= Math.max(m, n); i++)
        if (i % 9 === 1 && i % 7 === 2)
            moneyVariants.push([`M: ${i}`,`B: ${Math.trunc(i / 7)}`,`C: ${Math.trunc(i / 9)}`]);
    return moneyVariants;
}