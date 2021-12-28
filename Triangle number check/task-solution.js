function isTriangleNumber(number) {
    if (number !== parseInt(number) || number % 1) return false;
    let d = 1 - 4 * (-1 * (2 * number));
    return ((-1 - Math.sqrt(d)) / 2) % 1 === 0 && ((-1 + Math.sqrt(d)) / 2) % 1 === 0;
}