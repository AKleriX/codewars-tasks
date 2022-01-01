function removeParentheses(s){
    let len = s.length,
        corStr = s.replace(/\([^()]*\)/g, '');
    while (len !== corStr.length){
        len = corStr.length;
        corStr = corStr.replace(/\([^()]*\)/g, '');
    }
    return corStr;
}