function mineLocation(field){
    let minePosition = undefined;
    for (let i = 0; i < field.length; i++){
        for (let j = 0; j < field[i].length; j++)
            if (field[i][j] === 1) {
                minePosition = [i, j];
                break;
            }
        if (minePosition) break;
    }
    return minePosition;
}