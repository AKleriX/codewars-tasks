function chained(functions) {
    return (input) => {
        let result = input;
        functions.forEach(fun => result = fun(result));
        return result;
    }
}