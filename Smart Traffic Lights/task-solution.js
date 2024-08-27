class SmartTrafficLight {
  constructor([c1, r1], [c2, r2]) {
    this.roads = [
      { cars: c1, name: r1 },
      { cars: c2, name: r2 },
    ];
  }

  turngreen() {
    if (this.roads[0].cars > this.roads[1].cars) {
      const result = this.roads[0].name;
      this.roads[0].cars = 0;
      return result;
    } else if (this.roads[1].cars > this.roads[0].cars) {
      const result = this.roads[1].name;
      this.roads[1].cars = 0;
      return result;
    } else {
      return null;
    }
  }
}
