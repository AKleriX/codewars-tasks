const twistedSum = (n) =>{
    let sumDigits = 0;
    for (let i = 1; i <= n; i++)
        if (i < 10) sumDigits += i;
        else sumDigits += i.toString().split('').reduce((sum, d) => sum + Number(d), 0);
    return sumDigits;
}