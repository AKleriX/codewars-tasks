function isPangram(string){
    let abc = 'abcdifghijklmnopqrstuvwxyz'.split('');
    string = string.toLowerCase();
    return abc.filter(letter => string.indexOf(letter) === -1).length === 0;
}