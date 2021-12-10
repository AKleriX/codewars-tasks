function getDropsDataForCity(town, strng) {
    let drops = strng.split('\n').map(data => data.split(':')),
        cityIndex = -1;
    for (let i = 0; i < drops.length; i++)
        if (drops[i][0] === town){
            cityIndex = i;
            break;
        }
    return cityIndex === -1 ? -1 : drops[cityIndex][1].split(',');
}

function mean(town, strng) {
    let drops = getDropsDataForCity(town, strng);
    if (drops === -1) return -1;
    return drops.reduce((sum, data) => sum + Number(data.split(' ')[1]), 0) / 12;
}

function variance(town, strng) {
    let meanCount = mean(town, strng),
        drops = getDropsDataForCity(town, strng);
    if (drops === -1) return -1;
    return drops.reduce((sum, data) => sum + (Number(data.split(' ')[1]) - meanCount)**2, 0) / 12;
}