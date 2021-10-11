function tickets(arr){
    let vasyaMony = [0, 0, 0];
    arr.forEach(bill => {
        if (bill === 25)
            vasyaMony[0]++;
        else if (bill === 50){
            if (vasyaMony[0] > 0) {
                vasyaMony[0]--;
                vasyaMony[1]++;
            }
            else vasyaMony[2]++;
        }
        else if (bill === 100){
            if (vasyaMony[1] > 0 && vasyaMony[0] > 0) {
                vasyaMony[0]--;
                vasyaMony[1]--;
            }
            else if (vasyaMony[0] > 2)
                vasyaMony[0] -= 3;
            else vasyaMony[2]++;
        }
    });
    return vasyaMony[2] === 0 ? 'YES' : 'NO';
}