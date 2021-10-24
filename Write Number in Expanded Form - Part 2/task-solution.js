function expandedForm(num) {
    num = num.toString();
    let afterDotExpandedForm = [],
        beforeDotExpandedForm = [],
        afterDotDigitals = num.slice(num.indexOf('.') + 1),
        beforeDotDigitals = Number(num.slice(0, num.indexOf('.')));
    while (Number(afterDotDigitals) > 0) {
        if (Number(afterDotDigitals) % 10)
            afterDotExpandedForm.push(`${Number(afterDotDigitals) % 10}/${Math.pow(10, afterDotDigitals.length)}`);
        afterDotDigitals =afterDotDigitals.slice(0, afterDotDigitals.length - 1);
    }
    while (beforeDotDigitals > 0) {
        beforeDotExpandedForm.push(beforeDotDigitals % 10 * Math.pow(10, beforeDotExpandedForm.length));
        beforeDotDigitals = Math.trunc(beforeDotDigitals / 10);
    }
    return beforeDotExpandedForm.reverse().filter(digital => digital > 0).concat(afterDotExpandedForm.reverse()).join(' + ');
}