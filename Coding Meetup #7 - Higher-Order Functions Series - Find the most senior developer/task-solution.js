function findSenior(list) {
    return list.reduce((ageCounter, personData) => {
        if (personData.age > ageCounter[0])
            ageCounter = [personData.age,[personData]];
        else if (personData.age === ageCounter[0])
            ageCounter[1].push(personData);
        return ageCounter;
    }, [0, []])[1];
}
