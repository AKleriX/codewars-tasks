function toQueryString(obj) {
  let resArr = [];
  for (let key in obj)
    if (Array.isArray(obj[key]))
      for (let i = 0; i < obj[key].length; i++) resArr.push(`${key}=${obj[key][i]}`);
    else resArr.push(`${key}=${obj[key]}`);
  return resArr.join('&');
}
