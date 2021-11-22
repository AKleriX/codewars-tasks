function median(array) {
    return (array.length % 2) ? array.sort((a,b)=>a-b)[Math.trunc(array.length / 2)] :
        (array.sort((a,b)=>a-b)[array.length / 2] + array.sort((a,b)=>a-b)[(array.length / 2) - 1]) / 2;
}