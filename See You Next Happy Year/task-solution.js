function nextHappyYear(year) {
  while (new Set((++year).toString()).size < year.toString().length);
  return year;
}
