class Hangman {
  constructor(word) {
    this.word = word;
    this.status = true;
    this.letters = '';
    this.regExpForLetters = new RegExp('[' + word + ']', 'g');
  }

  guess(letter) {
    if (!this.status) return `The game has ended.`;
    if (!this.letters.includes(letter)) this.letters += letter;
    let regExpForWord = new RegExp('[^' + this.letters + ']', 'g'),
      currentWord = this.word.replace(regExpForWord, '_'),
      misLetters = this.letters.replace(this.regExpForLetters, '');
    if (currentWord === this.word) {
      this.status = false;
      return `You found the word! (${this.word})`;
    }
    if (misLetters.length > 6) {
      this.status = false;
      return `You got hung! The word was ${this.word}.`;
    }
    return `${currentWord.split('').join(' ')}${misLetters.length ? ' # ' : ''}${misLetters}`;
  }
}
