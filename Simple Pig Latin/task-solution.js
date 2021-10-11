function pigIt(str){
    return str.split(' ')
        .map(word => !word.match(/\W/) ? `${word.split('').slice(1).join('')}${word[0]}ay` : word)
        .join(' ');
}