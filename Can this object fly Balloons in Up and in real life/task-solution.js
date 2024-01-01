function Journey(object, crew, balloons) {
  this.isPossible = () => object.weight + crew * 80 <= (balloons * 4.8) / 1000;
}
