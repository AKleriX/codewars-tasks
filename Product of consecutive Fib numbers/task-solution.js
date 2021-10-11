function productFib(prod){
    let n1 = 0,
        n2 = 1,
        prodCorrect = false;

    while (!prodCorrect){

        let temp = n1;
        n1 = n2;
        n2 = temp + n2;

        if (n1 * n2 >= prod)
            prodCorrect = true;

    }

    return [n1, n2, n1 * n2 === prod];
}