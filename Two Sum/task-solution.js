function twoSum(numbers, target) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++){
            if ((numbers[i] + numbers[j]) === target){
                result = [i, j];
                break;
            }
        }
        if (result.length > 0) break;
    }
    return result;
}