function firstNonRepeatingLetter(s) {
    let charList = new Set();

    for (let i = 0; i < s.length; i++){
        let lowerChar = s[i].toLowerCase(),
            include = false;
        if (charList.has(lowerChar))
            include = true;
        for (let j = i + 1; j < s.length; j++)
            if (lowerChar === s[j].toLowerCase()){
                include = true;
                charList.add(lowerChar);
                break;
            }

        if (!include)
            return s[i];
    }

    return '';
}