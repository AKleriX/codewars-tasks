var findMissing = function (list) {
    let step = Math.min(Math.abs(list[1] - list[0]), Math.abs(list[2] - list[1])),
        missingTerm = 0;
    list.sort((a, b) => a - b);
    for (let i = 0; i < list.length - 1; i++){
        if (Math.abs(list[i + 1] - list[i]) !== step){
            missingTerm = list[i] + step;
        }
    }
    return missingTerm;
}