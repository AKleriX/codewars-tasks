let findFirstLetter = (dublets) =>{

    let nxt = dublets.find(dublet => dublets.every(dubletTwo => dublet[0] !== dubletTwo[1]));
    return dublets.length > 1 ? nxt[0] : dublets[0];

}

var recoverSecret = function(triplets) {

    let dublets = [],
        resultStr = '';

    triplets.forEach((triplet) => {
        let str = triplet.join(''),
            dubletOne = str.substr(0, 2),
            dubletTwo = str.substr(1, 3);

        if (dublets.indexOf(dubletOne) === -1)
            dublets.push(dubletOne);
        if (dublets.indexOf(dubletTwo) === -1)
            dublets.push(dubletTwo);

    });

    let nxt = findFirstLetter(dublets);

    while (nxt){
        resultStr += nxt;
        dublets = dublets.filter(dublet => dublet.indexOf(nxt) === -1);
        nxt = findFirstLetter(dublets);
    }

    return resultStr;

}