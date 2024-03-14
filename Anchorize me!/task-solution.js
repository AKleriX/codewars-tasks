const anchorize = (text) =>
  text.replace(/(http|https|ftp|ftps|file|smb):\/\/\S+/gi, (l) => `<a href="${l}">${l}</a>`);
