function towerBuilder(nFloors) {
    let tower = [];

    for (let i = 0; i < nFloors; i++){
        tower[i] ='';
        let spaceCount = nFloors - (i + 1),
            starsCount = (nFloors * 2 - 1) - spaceCount * 2;

        for (let j = 1; j <= spaceCount; j++)
            tower[i] += ' ';
        for (let j = 1; j <= starsCount; j++)
            tower[i] += '*';
        for (let j = 1; j <= spaceCount; j++)
            tower[i] += ' ';

    }

    return tower;
}