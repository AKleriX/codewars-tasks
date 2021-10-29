function validate(n){
    let numbers = n.toString().split('');
    if (numbers.length % 2 !== 0) numbers = numbers.map((number, index) => {
        if (!((index + 1) % 2))
            number *= 2;
        return number >= 10 ? number - 9 : number;
    });
    else numbers = numbers.map((number, index) => {
        if ((index + 1) % 2)
            number *= 2;
        return number >= 10 ? number - 9 : number;
    });
    return numbers.reduce((sum, number) => Number(sum) + Number(number)) % 10 === 0;
}