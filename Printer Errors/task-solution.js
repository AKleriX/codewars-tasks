function printerError(s) {
    return s.split('').filter(letter => letter < 'a' || letter > 'm').length + '/' + s.length;
}