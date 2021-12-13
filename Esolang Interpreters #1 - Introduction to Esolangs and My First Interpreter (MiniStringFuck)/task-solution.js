function myFirstInterpreter(code) {
    let resultStr = '',
        counter = 0;
    code = code.replace(/[^+.]/g, '');
    code.split('').forEach(command => {
        if (command === '+')
            counter = (counter + 1) % 256;
        else resultStr += String.fromCharCode(counter);
    });
    return resultStr;
}