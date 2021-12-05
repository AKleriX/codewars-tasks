function firstDup (s) {
    for (let i = 0; i < s.length; i++)
        if (s.indexOf(s[i], i + 1) !== -1)
            return s[i];
    return undefined;
}