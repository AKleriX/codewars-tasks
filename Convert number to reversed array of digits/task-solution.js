function digitize(n) {
    return n.toString().split('').map(Number).reverse();
}