function abbreviate(string) {
    let separators = string.split(/\w+/g);
    separators = separators.slice(1, separators.length - 1);
    return string.split(/\W/).filter(word => word !== '').map((word, index) => {
        let currentWord = word;
        if (word.length >= 4)
            currentWord = word[0] + word.slice(1, word.length - 1).length + word[word.length - 1];
        if (separators[index])
            currentWord += separators[index];
        return currentWord;
    }).join('');
}