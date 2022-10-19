function meeting(x) {
  let roomIdx = x.indexOf('O');
  return roomIdx > -1 ? roomIdx : 'None available!';
}
