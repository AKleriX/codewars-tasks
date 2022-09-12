function countPhotos(road) {
  let camLeft = 0,
    carRight = 0,
    photoCounter = 0;
  for (let i = 0; i < road.length; i++)
    switch (road[i]) {
      case '.':
        camLeft++;
        photoCounter += carRight;
        break;
      case '>':
        carRight++;
        break;
      case '<':
        photoCounter += camLeft;
        break;
    }
  return photoCounter;
}
