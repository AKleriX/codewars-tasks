function blackOrWhiteKey(keyPressCount) {
    keyPressCount = keyPressCount%88;
    if (keyPressCount < 5 || keyPressCount > 87)
        if (keyPressCount === 2) return 'black';
        else return 'white';
    keyPressCount = (keyPressCount - 3) % 12;
    if (keyPressCount <= 5 && keyPressCount > 0) return keyPressCount % 2 ? 'white' : 'black';
    return keyPressCount % 2 ? 'black' : 'white';
}