function highAndLow(numbers){
    return numbers.split(' ').reduce((maxMin, num) => {
        if (Number(num) > maxMin[0])
            maxMin[0] = Number(num);
        if (Number(num) < maxMin[1])
            maxMin[1] = Number(num);
        return maxMin;
    },[-Infinity, Infinity]).join(' ');
}