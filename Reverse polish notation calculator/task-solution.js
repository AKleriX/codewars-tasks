function calc(expr) {
    let numbers = [];
    expr.split(' ').forEach((item) => {
        if (!isNaN(item)){
            numbers.push(Number(item));
        }
        else {
            let a = numbers.pop(),
                b = numbers.pop();
            switch (item){
                case '+':
                    numbers.push(a + b);
                    break;
                case '-':
                    numbers.push(b - a);
                    break;
                case '*':
                    numbers.push(a * b);
                    break;
                case '/':
                    numbers.push(b / a);
                    break;
                default:
                    break;
            }
        }
    });
    return numbers[0];
}