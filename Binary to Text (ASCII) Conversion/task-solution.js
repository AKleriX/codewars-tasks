function binaryToString(binary) {
    let ASCIICode = '';
    for (let i = 0; i < binary.length; i += 8)
        ASCIICode += String.fromCharCode(parseInt(binary.slice(i, i+8), 2));
    return ASCIICode;
}