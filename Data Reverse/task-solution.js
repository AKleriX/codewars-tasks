function dataReverse(data) {
    let reverseData = [];
    for (let i = data.length - 8; i >= 0; i -= 8)
        reverseData = reverseData.concat(data.slice(i, i + 8));
    return reverseData;
}