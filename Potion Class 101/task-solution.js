class Potion {
  constructor(color, volume) {
    this.color = [...color];
    this.volume = volume;
  }

  mix(secPot) {
    return new Potion(
      secPot.color.map((c, i) =>
        Math.ceil(
          (secPot.volume * c + this.volume * this.color[i]) / (secPot.volume + this.volume),
        ),
      ),
      this.volume + secPot.volume,
    );
  }
}
