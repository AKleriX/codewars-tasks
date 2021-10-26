function toWeirdCase(string){
    return string.split(' ').map(word => word.split('')
        .map((letter, index) => index % 2 ? letter.toLowerCase() : letter.toUpperCase()).join('')).join(' ');
}