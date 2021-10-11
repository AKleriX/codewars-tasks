function digital_root(n) {
    let result_root = n;

    while (result_root > 9) {
        let digital_summ = 0;
        while (result_root > 0) {
            digital_summ += result_root % 10;
            result_root = Math.trunc(result_root / 10);
        }

        result_root = digital_summ;
    }

    return result_root;
}