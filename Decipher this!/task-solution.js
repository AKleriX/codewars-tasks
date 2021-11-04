function decipherThis(str) {
    let words = str.split(' '),
        decrWords = [];

    words.forEach(word => {
        let charCode = word.match(/\d+/)[0],
            lastWord = word.match(/\D+/) ? word.match(/\D+/)[0] : '';
        if (lastWord.length >= 3) lastWord = lastWord[lastWord.length - 1] + lastWord.slice(1, lastWord.length - 1) + lastWord[0];
        else if (lastWord.length === 2) lastWord = lastWord[1] + lastWord[0];
        decrWords.push(String.fromCharCode(charCode) + lastWord);
    });

    return decrWords.join(' ');
}