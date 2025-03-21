class JurassicWord {
  constructor() {
    this.foodPatterns = {
      deadDino: /_C.....C}>/,
      flowers: /iii.....iii/,
      leaves: /\|\|\|.....\|\|\|/,
    };

    this.dinos = {
      T_Rex: 'VvvvV',
      velociraptor: 'vvvvv',
      brachiosaurus: 'uuuuu',
      triceratops: 'uuVuu',
    };
  }

  lunchTime(scene) {
    const food = this.foodPatterns.deadDino.test(scene)
      ? 'a dead dino.'
      : this.foodPatterns.flowers.test(scene)
      ? 'flowers.'
      : this.foodPatterns.leaves.test(scene)
      ? 'leaves.'
      : 'something.';

    const bite = scene.slice(-8, -3);
    let eater;

    switch (bite) {
      case this.dinos.T_Rex:
        eater = food === 'a dead dino.' || food === 'something.' ? 'A T-Rex' : 'Something';
        break;
      case this.dinos.velociraptor:
        eater = food === 'a dead dino.' || food === 'something.' ? 'A velociraptor' : 'Something';
        break;
      case this.dinos.brachiosaurus:
        eater = ['flowers.', 'leaves.', 'something.'].includes(food)
          ? 'A brachiosaurus'
          : 'Something';
        break;
      case this.dinos.triceratops:
        eater = ['flowers.', 'something.'].includes(food) ? 'A triceratops' : 'Something';
        break;
      default:
        eater = 'Something';
        break;
    }

    return `${eater} is eating ${food}`;
  }
}
