function diamondsAndToads(sentence, fairy) {
  let counter = fairy === 'good' ? { ruby: 0, crystal: 0 } : { python: 0, squirrel: 0 };
  for (let i = 0; i < sentence.length; i++) {
    if (fairy === 'good') {
      if (/[rc]/i.test(sentence[i]))
        counter[/r/i.test(sentence[i]) ? 'ruby' : 'crystal'] =
          counter[/r/i.test(sentence[i]) ? 'ruby' : 'crystal'] +
          (sentence[i] === sentence[i].toUpperCase() ? 2 : 1);
    } else if (/[ps]/i.test(sentence[i]))
      counter[/p/i.test(sentence[i]) ? 'python' : 'squirrel'] =
        counter[/p/i.test(sentence[i]) ? 'python' : 'squirrel'] +
        (sentence[i] === sentence[i].toUpperCase() ? 2 : 1);
  }
  return counter;
}
