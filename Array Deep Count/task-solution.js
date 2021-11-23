function deepCount(a){
    let deepLength = a.length;
    a.forEach(item => {
        if (Array.isArray(item))
            deepLength += deepCount(item);
    });
    return(deepLength);
}