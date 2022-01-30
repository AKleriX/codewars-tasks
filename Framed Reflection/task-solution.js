function mirror(text){
    let words = text.split(' ').map(word => word.split('').reverse().join('')),
        maxLenWord = Math.max.apply(null, words.map(word => word.length));
    return '*'.repeat(4 + maxLenWord) + '\n' + words.map(word => '* ' + word + ' '.repeat(1 + maxLenWord - word.length) + '*').join('\n') + 
           '\n' + '*'.repeat(4 + maxLenWord);
  }