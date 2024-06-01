const cookingTime = (weight) => {
  const time = Math.ceil((((weight * 1000) / 450) * 20 + 20) / 5) * 5,
    h = (time / 60) | 0,
    m = time % 60;
  return !weight
    ? 'There is no chicken!'
    : h < 1
    ? `${m} mins`
    : `${h} hr${h > 1 ? 's' : ''}${m ? ' ' + m + ' mins' : ''}`;
};
