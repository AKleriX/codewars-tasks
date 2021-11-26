var nbrOfLaps = function (x, y) {
    let lengthWay = x;
    while (lengthWay % y)
        lengthWay += x;
    return [lengthWay / x, lengthWay / y];
}