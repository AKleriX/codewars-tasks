function bitsBattle(numbers) {
    let bitCounter = numbers.reduce((counter, num) => {
        if (num !== 0)
            if (num % 2)
                counter[0] += num.toString(2).split('').reduce((oneCounter, d)=> d === '1' ? oneCounter + 1 : oneCounter, 0);
            else
                counter[1] += num.toString(2).split('').reduce((zeroCounter, d)=> d === '0' ? zeroCounter + 1 : zeroCounter, 0);
        return counter;
    }, [0 ,0]);
    if (bitCounter[1] === bitCounter[0]) return 'tie';
    return bitCounter[0] > bitCounter[1] ? 'odds win' : 'evens win';
}