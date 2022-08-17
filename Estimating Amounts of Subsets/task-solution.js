function estSubsets(arr) {
  return 2 ** new Set(arr).size - 1;
}
