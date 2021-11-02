function cleanString(s) {
    let correctStr = [];
    s.split('').forEach(char => {
        if (char === '#' && correctStr.length > 0) correctStr.pop();
        else if (char !== '#') correctStr.push(char);
    });
    return correctStr.join('');
}