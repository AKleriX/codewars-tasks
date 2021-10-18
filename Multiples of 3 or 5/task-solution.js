function solution(number){
    let sum = 0;

    for (let i = 1; i < number; i++)
        sum += (i % 3 === 0 || i % 5 === 0) ? i : 0;

    return sum;
}