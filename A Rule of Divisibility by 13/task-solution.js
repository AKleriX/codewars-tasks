function thirt(n) {
    let lastN = Infinity,
        currentN = n;
    while (currentN !== lastN){
        let digitals = currentN.toString().split('').reverse();
        lastN = currentN;
        currentN = digitals.reduce((sum, digital, index) => sum + (digital * (Math.pow(10, index) % 13)), 0);
    }
    return currentN;
}