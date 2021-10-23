function validBraces(braces){
    let lastBracesLength;
    do {
        lastBracesLength = braces.length;
        braces = braces.replace(/\(\)|\{\}|\[\]/g,'');
    } while (braces.length !== lastBracesLength);
    return braces.length === 0;
}