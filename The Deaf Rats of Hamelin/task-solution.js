var countDeafRats = function(town) {
    town = town.replace(/\s+/g, '');
    let piedPiperIndex = town.indexOf('P'),
        deafRatsCount = 0;
    for(let i = 0; i < piedPiperIndex; i += 2)
        if (town[i] === 'O') deafRatsCount++;
    for(let j = piedPiperIndex + 1; j < town.length; j += 2)
        if (town[j] === '~') deafRatsCount++;
    return deafRatsCount;
}