function isLanguageDiverse(list) {
  let langsCounter = list.reduce((counter, data) => {
    switch (data.language){
        case 'Python':
          counter[0]++;
          break;
        case 'Ruby':
          counter[1]++;
          break;
        case 'JavaScript':
          counter[2]++
          break;
    };
    return counter;
  }, [0, 0, 0]);
  langsCounter.sort((a, b) => b - a);
  return langsCounter[1] * 2 >= langsCounter[0] && langsCounter[2] * 2 >= langsCounter[0];
}