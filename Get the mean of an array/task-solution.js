function getAverage(marks){
  return Math.floor(marks.reduce((sum, n) => sum + n) / marks.length);
}