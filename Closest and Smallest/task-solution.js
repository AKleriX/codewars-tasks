function  closest(strng) {

    if (strng === '') return [];

    let numArr = strng.split(' ')
            .map(item => {let sum = 0;
                for (let i = 0; i < item.length; i++)
                    sum += Number(item[i]);
                return sum;
            }),
        minDistant = Infinity,
        firstArr = [],
        secondArr = [];

    for (let i = 0; i < numArr.length - 1; i++)
        for (let j = i + 1; j < numArr.length; j++){

            if (Math.abs(numArr[i] - numArr[j]) < minDistant){
                minDistant = Math.abs(numArr[i] - numArr[j]);

                [firstArr, secondArr] = assignArrs(numArr[i], numArr[j], i, j, strng);

            }else if (Math.abs(numArr[i] - numArr[j]) === minDistant){
                let minNum = Math.min(numArr[i], numArr[j]);
                if (minNum < firstArr[0]){
                    [firstArr, secondArr] = assignArrs(numArr[i], numArr[j], i, j, strng);
                }
            }
        }

    return [firstArr, secondArr];

}

let assignArrs = (num1, num2, posNum1, posNum2, str) => {
    let firstArr = [],
        secondArr = [];

    if (num1 < num2 || (num1 === num2 && posNum1 < posNum2)){
        firstArr = [num1, posNum1, Number(str.split(' ')[posNum1])];
        secondArr = [num2, posNum2, Number(str.split(' ')[posNum2])];
    } else if (num1 > num2 || (num1 === num2 && posNum1 > posNum2)){
        firstArr = [num2, posNum2, Number(str.split(' ')[posNum2])];
        secondArr = [num1, posNum1, Number(str.split(' ')[posNum1])];
    }

    return [firstArr, secondArr];
}