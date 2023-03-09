const babySharkLyrics = () => {
  let s = [
      'Baby shark,',
      'Mommy shark,',
      'Daddy shark,',
      'Grandma shark,',
      'Grandpa shark,',
      "Let's go hunt,",
    ],
    r = [];
  for (let i = 0; i < s.length; i++)
    r.push((s[i] + ' doo'.repeat(6) + '\n').repeat(3) + s[i].replace(',', '!'));
  return r.join('\n') + '\n' + 'Run away,…';
};
