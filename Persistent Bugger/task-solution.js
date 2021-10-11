function persistence(num) {
    let perIterat = 0;

    while (num > 9){
        let numTemp = 1;
        while (num > 0){
            numTemp *= num % 10;
            num = Math.trunc(num / 10);
        }
        num = numTemp;
        perIterat++;
    }

    return perIterat;
}