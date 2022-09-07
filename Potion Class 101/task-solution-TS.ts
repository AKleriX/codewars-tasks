export class Potion {
  color: number[];
  volume: number;
  constructor(color: number[], volume: number) {
    this.color = [...color];
    this.volume = volume;
  }
  mix(secPot: Potion) {
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
