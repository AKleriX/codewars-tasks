function dup(s) {
    return s.map((str) => str.split('').filter((letter, i, arr) => arr[i+1] !== letter).join(''));
}