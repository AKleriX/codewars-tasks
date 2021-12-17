function travel(r, zipcode) {
    let zipcodeRegExp = new RegExp('^\\d+\\s+.+\\s+' + zipcode + '$'),
        streetsTownsAndHNumber = [[],[]];
    r.split(',').forEach((client) => {
        if (zipcodeRegExp.test(client)){
            let addrClient = client.split(' ').slice(0, client.split(' ').length - 2);
            streetsTownsAndHNumber[1].push(addrClient[0]);
            streetsTownsAndHNumber[0].push(addrClient.slice(1).join(' '));
        }
    });
    console.log(zipcode, streetsTownsAndHNumber)
    return zipcode + ':' + streetsTownsAndHNumber[0].join(',') + '/' + streetsTownsAndHNumber[1].join(',');
}