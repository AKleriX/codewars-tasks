let buildDeck = [].concat(...['hearts', 'spades', 'diamonds', 'clubs'].map(suit => ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'].map(rank => `${rank} of ${suit}`)));