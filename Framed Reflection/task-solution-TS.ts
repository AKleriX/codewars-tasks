export const mirror = (text: string): string =>{
    let words: string[] = text.split(' ').map(word => word.split('').reverse().join('')),
        maxLenWord: number = Math.max.apply(null, words.map(word => word.length));
    return '*'.repeat(maxLenWord + 4) + '\n' + words.map(word => '* ' + word + ' '.repeat(1 + maxLenWord - word.length) + '*').join('\n') +
           '\n'+ '*'.repeat(maxLenWord + 4);
  }