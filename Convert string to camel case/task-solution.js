function findMissingLetter(array){
    let index = array
        .slice(1)
        .findIndex((c, i) => c.charCodeAt() - array[i].charCodeAt() > 1);

    return String.fromCharCode(array[index].charCodeAt() + 1);
}