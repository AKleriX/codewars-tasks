function titleCase(title, minorWords = '') {
    minorWords = minorWords.toLowerCase().split(' ');
    return title !== '' ? title.toLowerCase().split(' ').reduce((resultWords, word, index) => {
        if ((index > 0) && (minorWords.indexOf(word) !== -1))
            resultWords.push(word);
        else resultWords.push(word[0].toUpperCase() + word.slice(1));
        return resultWords;
    }, []).join(' ') : '';
}