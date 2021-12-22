function iterPi(epsilon) {
    let iterationCounter = 0,
        piDivFourCalculated = 0;
    for (let i = 1; Math.abs(piDivFourCalculated * 4 - Math.PI) >= epsilon; i = i + 2){
        piDivFourCalculated += (-1)**iterationCounter * (1/i);
        iterationCounter++;
    }
    return [iterationCounter, Math.round(piDivFourCalculated * 4 * 10000000000) / 10000000000];
}