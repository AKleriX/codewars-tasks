function isValidIP(str) {
    let ipDigitals = str.split('.'),
        valid = true;
    if (ipDigitals.length !== 4) return false;
    ipDigitals.forEach((num) => {
        if ((!num) || (Number(num) < 0) || (Number(num) > 255) ||
            (num[0] === '0' && num.length > 1) || (num.slice('').search(/[^0-9]/g) > -1))
            valid = false;
    });
    return valid;
}