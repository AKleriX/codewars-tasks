function findChildren(dancingBrigade){
    return dancingBrigade.toLowerCase().split('').sort().map((letter, i, danBri) => {
        if (i === 0 || letter !== danBri[i - 1])
            return letter.toUpperCase();
        return letter;
    }).join('');
}