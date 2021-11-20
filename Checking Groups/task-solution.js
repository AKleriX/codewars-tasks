function groupCheck(s){
    let openBracketStack = [];
    for (let i = 0; i < s.length; i++){
        switch (s[i]) {
            case '(':
                openBracketStack.push(')');
                break;
            case '[':
                openBracketStack.push(']');
                break;
            case '{':
                openBracketStack.push('}');
                break;
            case openBracketStack.pop():
                break;
            default:
                return false;
        }
    }
    return openBracketStack.length === 0;
}