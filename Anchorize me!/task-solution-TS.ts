export const anchorize = (text: string) =>
  text.replace(/(http|https|ftp|ftps|file|smb):\/\/\S+/gi, (l) => `<a href="${l}">${l}</a>`);
