function findTheParityOutlier(arr) {
   let even = false,
       outlier = 0;

   if ((arr[0] % 2 === 0 && arr[1] % 2 === 0) ||
       (arr[0] % 2 === 0 && arr[2] % 2 === 0) ||
       (arr[1] % 2 === 0 && arr[2] % 2 === 0))
       even = true;

    for (let i = 0; i < arr.length; i++){
        if (even){
            if (arr[i] % 2 !== 0){
                outlier = arr[i];
                break;
            }
        }
        else{
            if (arr[i] % 2 === 0){
                outlier = arr[i];
                break;
            }
        }
    }

    return outlier;
}

console.log(findTheParityOutlier([160, 3, 1719, 19, 11, 13, -21]));

