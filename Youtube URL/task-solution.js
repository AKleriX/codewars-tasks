const makeYoutubeLink = (str) => {
  let endURL = str.split('/').pop();
  return (
    'https://www.youtube.com/embed/' +
    (endURL.includes('=') ? endURL.slice(endURL.indexOf('=') + 1) : endURL)
  );
};
