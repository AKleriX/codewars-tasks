function solution(list){
    let resultStr = '',
        position = 0,
        numbersArr = [];

    list.forEach(number => {
        if (position === 0){
            numbersArr.push(number);
            position++;
        }
        else {
            if ((numbersArr[position - 1]) + 1 === number){
                numbersArr.push(number);
                position++;
            } else {
                if (position > 2){
                    resultStr += `${numbersArr[0]}-${numbersArr[position - 1]},`;
                }
                else {
                    for (let i = 0; i < position; i++)
                        resultStr += numbersArr[i] +',';
                }
                numbersArr = [];
                position = 0;
                numbersArr.push(number);
                position++;
            }
        }
    });

    if (position > 0){
        if (position > 2){
            resultStr += `${numbersArr[0]}-${numbersArr[position - 1]},`;
        }
        else {
            for (let i = 0; i < position; i++)
                resultStr += numbersArr[i] +',';
        }
    }

    return resultStr.slice(0, resultStr.length - 1);
}