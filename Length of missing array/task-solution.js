function getLengthOfMissingArray(arrayOfArrays) {
    if (!arrayOfArrays) return 0;
    let sortaArray = [...arrayOfArrays].filter(item => item && item.length > 0).sort((a,b) => a.length - b.length);
    if (sortaArray.length !== arrayOfArrays.length) return 0;
    for (let i = 0; i < sortaArray.length - 1; i++)
        if (sortaArray[i].length + 1 !== sortaArray[i + 1].length) return sortaArray[i].length + 1;
    return 0;
}