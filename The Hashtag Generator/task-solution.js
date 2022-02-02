const generateHashtag = (str) => {
  let words = str.trim() !== '' ? str.trim().split(/\s+/).map(word => word[0].toUpperCase() + word.slice(1)).join('') : '';
  return (!words.length || words.length > 139) ? false : '#' + words;
};