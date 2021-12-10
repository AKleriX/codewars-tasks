function formatWords(words){
    if (!words) return '';
    words = words.filter(word => word !== '');
    if (words.length === 1) return words[0];
    return words.length === 0 ? '' : words.slice(0, words.length - 1).join(', ') + ' and ' + words[words.length - 1];
}