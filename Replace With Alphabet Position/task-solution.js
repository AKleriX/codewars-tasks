function alphabetPosition(text) {
    return text.toUpperCase().replace(/[^A-Z]/g,'').split('').map(letter => letter.toUpperCase().charCodeAt(0) - 64).join(' ');
}