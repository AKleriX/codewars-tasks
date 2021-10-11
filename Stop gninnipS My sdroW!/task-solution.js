function spinWords(str){
    return str.split(' ').map(word => word.length > 4 ? word.split('').reverse().join('') : word).join(' ');
}