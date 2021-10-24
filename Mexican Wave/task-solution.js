function wave(str){
    let resultWave = [];
    str.split('').forEach((item, index) =>{
        if (item !== ' ')
            resultWave.push(str.slice(0, index) + str[index].toUpperCase() + str.slice(index + 1));
    });
    return resultWave;
}