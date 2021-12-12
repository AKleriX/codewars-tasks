function playPass(s, n) {
    return s.split('').map((symbol, i) => {
        if (/[a-zA-Z]/.test(symbol)){
            let newCharCode = (symbol.toUpperCase().charCodeAt() + (n % 26));
            if (newCharCode > 90)
                newCharCode = newCharCode - 26;
            return i % 2 ? String.fromCharCode(newCharCode).toLowerCase() : String.fromCharCode(newCharCode);
        } else if (/\d/.test(symbol)) return 9 - Number(symbol);
        return symbol;
    }).reverse().join('');
}