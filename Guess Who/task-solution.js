function GuessWho(character) {
  this.characteristic = [
    [
      'Jean-Claude',
      ['Male', 'Glasses', 'Brown eyes', 'Bald', 'White hair', 'Small mouth', 'Small nose'],
    ],
    ['Pierre', ['Male', 'Mustache', 'Brown eyes', 'Brown hair', 'Big mouth', 'Small nose']],
    ['Jean', ['Male', 'White hair', 'Big nose', 'Big mouth', 'Blue eyes']],
    [
      'Amelie',
      ['Female', 'Hat', 'Brown hair', 'Small mouth', 'Long hair', 'Brown eyes', 'Small nose'],
    ],
    ['Mirabelle', ['Female', 'Black hair', 'Earrings', 'Small mouth', 'Brown eyes', 'Big nose']],
    [
      'Isabelle',
      ['Female', 'Blonde hair', 'Glasses', 'Hat', 'Small mouth', 'Small nose', 'Brown eyes'],
    ],
    ['Antonin', ['Male', 'Brown eyes', 'Black hair', 'Small nose', 'Big mouth']],
    ['Bernard', ['Male', 'Brown eyes', 'Brown hair', 'Small nose', 'Hat']],
    ['Owen', ['Male', 'Blue eyes', 'Blonde hair', 'Small nose', 'Small mouth']],
    ['Dylan', ['Male', 'Brown eyes', 'Blonde hair', 'Small nose', 'Small mouth', 'Bald', 'Beard']],
    ['Herbert', ['Male', 'Brown eyes', 'Blonde hair', 'Big nose', 'Small mouth', 'Bald']],
    ['Christine', ['Female', 'Blue eyes', 'Blonde hair', 'Small nose', 'Small mouth', 'Long hair']],
    ['Luc', ['Male', 'Brown eyes', 'White hair', 'Small nose', 'Small mouth', 'Glasses']],
    ['Cecilian', ['Male', 'Brown eyes', 'Ginger hair', 'Small nose', 'Small mouth']],
    ['Lionel', ['Male', 'Brown eyes', 'Brown hair', 'Big nose', 'Big mouth', 'Mustache']],
    [
      'Benoit',
      ['Male', 'Brown eyes', 'Brown hair', 'Small mouth', 'Small nose', 'Mustache', 'Beard'],
    ],
    ['Robert', ['Male', 'Blue eyes', 'Brown hair', 'Big nose', 'Big mouth']],
    ['Charline', ['Female', 'Brown hair', 'White hair', 'Small nose', 'Big mouth']],
    ['Renaud', ['Male', 'Brown eyes', 'Blonde hair', 'Small nose', 'Big mouth', 'Mustache']],
    ['Michel', ['Male', 'Brown eyes', 'Blonde hair', 'Small nose', 'Big mouth', 'Beard']],
    [
      'Pierre-Louis',
      ['Male', 'Blue eyes', 'Brown hair', 'Small nose', 'Small mouth', 'Bald', 'Glasses'],
    ],
    ['Etienne', ['Male', 'Brown eyes', 'Blonde hair', 'Small nose', 'Small mouth', 'Glasses']],
    ['Henri', ['Male', 'Brown eyes', 'White hair', 'Small nose', 'Big mouth', 'Hat']],
    ['Damien', ['Male', 'Brown eyes', 'Blonde hair', 'Small nose', 'Big mouth', 'Hat']],
  ];
  this.counter = 1;
  this.seatchCharacter = this.characteristic.filter((data) => data[0] === character)[0];
}

GuessWho.prototype.guess = function (guess) {
  if (guess === this.seatchCharacter[0])
    return [`Correct! in ${this.counter} turn${this.counter > 1 ? 's' : ''}`];
  this.counter++;
  if (this.seatchCharacter[1].some((data) => data === guess))
    this.characteristic = this.characteristic.filter((char) =>
      char[1].some((data) => data === guess),
    );
  else
    this.characteristic = this.characteristic.filter(
      (char) => char[0] !== guess && char[1].every((data) => data !== guess),
    );
  return this.characteristic.map((char) => char[0]);
};
