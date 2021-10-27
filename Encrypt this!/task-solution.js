var encryptThis = function(text) {
    console.log(text.split(' '));
    return text.split(' ').map(word => {
        return word.split('').map((letter, index) => {
            switch(index){
                case 0:
                    return letter.charCodeAt();
                case 1:
                    return word[word.length - 1];
                case word.length - 1:
                    return word[1];
                default:
                    return letter;
            }
        }).join('');
    }).join(' ');
}