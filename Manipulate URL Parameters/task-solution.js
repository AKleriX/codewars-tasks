/**
 * Play with URLs
 * @param {string} url - The URL that's we want to manipulate
 * @param {string} param - The parameter that we want to change or add
 * @returns {string} The result URL.
 */
const addOrChangeUrlParameter = (url, param) => {
  url = url.replace(/\?+$/, '');
  if (!param) return url;
  return new RegExp(param.slice(0, param.indexOf('=') + 1)).test(url)
    ? url.replace(new RegExp(param.slice(0, param.indexOf('=') + 1) + '[^?$]+'), param)
    : url + (url.includes('?') ? '&' : '?') + param;
};
