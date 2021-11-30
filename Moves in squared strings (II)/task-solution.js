function rot(strng) {
    return strng.split('').reverse().join('');
}
function selfieAndRot(strng) {
    strng = strng.split('\n').map(row => row + '.'.repeat(row.length)).join('\n');
    return strng + '\n' + rot(strng);
}
function oper(fct, s) {
    return fct(s);
}