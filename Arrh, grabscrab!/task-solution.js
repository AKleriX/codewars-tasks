function grabscrab(anagram, dictionary) {
    let words = [];
    anagram = anagram.split('').sort().join('');
    dictionary.forEach(word => {
        if (word.length === anagram.length){
            let sortLettersWord = word.split('').sort().join('');
            if (anagram === sortLettersWord) words.push(word);
        }
    });
    return words;
}