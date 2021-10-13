function zero(func = undefined) {
    if (!func)
        return 0;
    return func(0);
}

function one(func = undefined) {
    if (!func)
        return 1;
    return func(1);
}
function two(func = undefined) {
    if (!func)
        return 2;
    return func(2);
}
function three(func = undefined) {
    if (!func)
        return 3;
    return func(3);
}
function four(func = undefined) {
    if (!func)
        return 4;
    return func(4);
}
function five(func = undefined) {
    if (!func)
        return 5;
    return func(5);
}
function six(func = undefined) {
    if (!func)
        return 6;
    return func(6);
}
function seven(func = undefined) {
    if (!func)
        return 7;
    return func(7);
}
function eight(func = undefined) {
    if (!func)
        return 8;
    return func(8);
}
function nine(func = undefined) {
    if (!func)
        return 9;
    return func(9);
}

function plus(num) {
    return (newNum) => {
        return newNum + num;
    }
}
function minus(num) {
    return (newNum) => {
        return newNum - num;
    }
}
function times(num) {
    return (newNum) => {
        return newNum * num;
    }
}
function dividedBy(num) {
    return (newNum) => {
        return Math.trunc(newNum / num);
    }
}