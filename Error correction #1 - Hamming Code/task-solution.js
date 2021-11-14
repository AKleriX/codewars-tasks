function encode(text) {
    let tripledBinary = text.split('').map(letter => {
        let binary = parseInt(letter.charCodeAt(), 10).toString(2);
        if (binary.length < 8) binary = [...new Array(8 - binary.length)].map(() => 0).join('') + binary;
        return binary.split('').map(num => num+ num + num).join('')
    });
    return tripledBinary.join('');
}

function decode(bits) {
    let triplets = [];
    for (let i = 3; i <= bits.length; i += 3)
        triplets.push(bits.slice(i - 3, i));
    let corBits = triplets.map(triplet => {
        if (triplet[0] === triplet[1] || triplet[0] === triplet[2])
            return triplet[0];
        return triplet[1];
    });
    let bytes = [];
    for (let i = 8; i <= corBits.length; i += 8)
        bytes.push(corBits.slice(i - 8, i).join(''));
    return bytes.map(byte => String.fromCharCode(parseInt(byte, 2))).join('');
}