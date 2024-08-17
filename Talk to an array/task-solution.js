const talkingAbout = (what) => {
  if (!Array.isArray(what)) return 'What?';

  const arr = what.map((e) => e.toLowerCase());

  if (!arr.length) return 'Nothing here!';

  if (arr.every((e) => e === 'ok')) return 'Everything is OK!';
  if (arr.join(' ').includes('nice you') || arr.join(' ').includes('you nice'))
    return 'Nice to meet you!';
  if (arr.filter((e) => e === 'waiting').length === 4 && arr.includes('girl'))
    return 'Waiting for a girl!';
  if (arr.every((e) => e.startsWith('f'))) return 'Array is full!';
  if (arr.some((e) => e === 'child'))
    return `We have ${arr.filter((e) => e === 'child').length} children!`;
  if (arr.includes('myjinxin')) return 'Really handsome!';
  if (arr.includes('problem')) return 'Array has problem!';

  return 'No problem!';
};
