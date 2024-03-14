const singSong = (a, b) =>
  b
    ? a === b
      ? `I have two ${a}s.`
      : `Uhh! ${a[0].toUpperCase() + a.slice(1)}-${b}!`
    : `I have a${/[aeoui]/i.test(a[0]) ? 'n' : ''} ${a}.`;
