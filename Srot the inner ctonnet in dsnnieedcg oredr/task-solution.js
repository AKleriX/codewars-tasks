function sortTheInnerContent(words)
{
    return words.split(' ').map(word => {
        return word.length > 1 ? word[0] + word.slice(1, word.length - 1).split('').sort((a, b) => {
            if (a < b) return 1;
            if (a > b) return -1;
            return 0;
        }).join('') + word[word.length - 1] : word;
    }).join(' ');
}