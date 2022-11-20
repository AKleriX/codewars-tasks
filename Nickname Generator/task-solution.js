const nicknameGenerator = (name) =>
  name.length < 4 ? 'Error: Name too short' : name.slice(0, /[aeoui]/.test(name[2]) ? 4 : 3);
