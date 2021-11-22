function twosDifference(input){
    let pairsArray = [];

    input.sort((a,b)=>a-b).forEach((num, index, arr) => {
        for (let i = index; (i <= index + 2) && (i < arr.length); i++)
            if (arr[i] === num + 2) pairsArray.push([num, arr[i]]);
    });

    return pairsArray;
}