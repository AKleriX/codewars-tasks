function doubleton(num) {
  while (new Set((++num).toString()).size !== 2);
  return num;
}
