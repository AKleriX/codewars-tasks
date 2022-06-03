function drive(drinks, finished, drive_time) {
  let fTime = +finished.split(':')[0] * 60 + +finished.split(':')[1],
    dTime =
      (+drive_time.split(':')[0] + (finished > drive_time ? 24 : 0)) * 60 +
      +drive_time.split(':')[1],
    alcCount = 0;
  for (let i = 0; i < drinks.length; i++) alcCount += (drinks[i][0] * drinks[i][1]) / 1000;
  return [Math.round(alcCount * 100) / 100, alcCount < (dTime - fTime) / 60];
}
