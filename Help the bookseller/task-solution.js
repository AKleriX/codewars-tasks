function stockList(listOfArt, listOfCat){
    let catalog = {};
    listOfCat.forEach(letter => catalog[letter] = 0);
    listOfArt.forEach(code => {
        if (catalog.hasOwnProperty(code[0])) catalog[code[0]] += Number(code.split(' ')[1]);
    });
    return listOfArt.length > 0 ? listOfCat.map(letter => `(${letter} : ${catalog[letter]})`).join(' - ') : '';
}