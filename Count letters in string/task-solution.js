function letterCount(s){
    return s.split('').reduce((counter, letter) => {
        if (letter.toLowerCase() === letter)
            if (counter.hasOwnProperty(letter))
                counter[letter]++;
            else counter[letter] = 1;
        return counter;
    }, {});
}