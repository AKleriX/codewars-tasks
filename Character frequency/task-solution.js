function letterFrequency(text){
    let freqLetters = {},
        arrFreq =[];
    text.replace(/[^a-z]/ig, '').toLowerCase().split('').forEach(letter => {
      if (!freqLetters.hasOwnProperty(letter)) freqLetters[letter] = 0;
      freqLetters[letter]++;
    });
    for (let letter in freqLetters)
      arrFreq.push([letter, freqLetters[letter]]);
    return arrFreq.sort((a, b) => a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]);
  }