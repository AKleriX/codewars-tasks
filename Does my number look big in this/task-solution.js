function narcissistic(value) {
    return value === value.toString().split('').reduce((sum, num) => sum + Math.pow(num, value.toString().length), 0);
}