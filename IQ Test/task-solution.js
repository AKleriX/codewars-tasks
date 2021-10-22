function iqTest(numbers){
    numbers = numbers.split(' ');

    let evens = numbers.filter(num => !!(num % 2)),
        odds = numbers.filter(num => !(num % 2));

    return odds.length < evens.length ? (numbers.indexOf(odds[0]) + 1) : (numbers.indexOf(evens[0]) + 1);
}