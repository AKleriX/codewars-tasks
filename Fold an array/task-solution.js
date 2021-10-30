function foldArray(array, runs)
{
    let newArray = [...array];
    for (; runs > 0; runs--){
        if (newArray.length === 1) return newArray;
        let arrayCenter = Math.trunc(newArray.length / 2);
        let tempArray = [];
        for (let i = 0; i < arrayCenter; i++){
            tempArray.push(newArray[i] + newArray[newArray.length - 1 - i]);
        }
        if (newArray.length % 2) tempArray.push(newArray[arrayCenter]);
        newArray = tempArray;
    }
    return newArray;
}