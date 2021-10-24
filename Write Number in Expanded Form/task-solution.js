function expandedForm(num) {
    let expandedForm = [];
    while (num > 0) {
        expandedForm.push(num % 10 * Math.pow(10, expandedForm.length));
        num = Math.trunc(num / 10);
    }
    return expandedForm.reverse().filter(digital => digital > 0).join(' + ');
}