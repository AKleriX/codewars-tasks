var whoEatsWho = function(zoo) {
    let zooData = {
            antelope: ['grass'],
            'big-fish': ['little-fish'],
            bug: ['leaves'],
            bear: ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
            chicken: ['bug'],
            cow: ['grass'],
            fox: ['chicken', 'sheep'],
            giraffe: ['leaves'],
            lion: ['antelope', 'cow'],
            panda: ['leaves'],
            sheep: ['grass'],
            grass: [],
            leaves: [],
            'little-fish': []
        },
        resultArr = [zoo],
        zooArr = zoo.split(','),
        iterationZoo = 0;

    while (iterationZoo < zooArr.length){

        if (zooData.hasOwnProperty(zooArr[iterationZoo])){
            if (iterationZoo > 0){
                if (zooData[zooArr[iterationZoo]].indexOf(zooArr[iterationZoo - 1]) !== -1){
                    [resultArr, zooArr, iterationZoo] =
                        eat(resultArr, zooArr[iterationZoo], zooArr[iterationZoo - 1], zooArr, iterationZoo - 1);
                    continue;
                }
            }

            if (iterationZoo < zooArr.length - 1){
                if (zooData[zooArr[iterationZoo]].indexOf(zooArr[iterationZoo + 1]) !== -1){
                    [resultArr, zooArr, iterationZoo] =
                        eat(resultArr, zooArr[iterationZoo], zooArr[iterationZoo + 1], zooArr, iterationZoo + 1);
                    continue;
                }
            }
        }
        iterationZoo++

    }

    resultArr.push(zooArr.join(','));

    return resultArr;
}

let eat = (resultArr, eater, food, zooArr, indexZoo) => {
    resultArr.push(`${eater} eats ${food}`);
    zooArr.splice(indexZoo, 1);

    return [resultArr, zooArr, 0];
}