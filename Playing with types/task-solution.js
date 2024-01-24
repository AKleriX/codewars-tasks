const typing = (param) => {
  const type = typeof param;
  if (type === 'object')
    if (Array.isArray(param)) return `${type}=[${param.join(',')}]`;
    else
      return `${type}={${Object.entries(param)
        .map(([k, v]) => `"${k}":${typeof v === 'string' ? `"${v}"` : v}`)
        .join(',')}}`;
  return param !== undefined
    ? `${type}=${type === 'string' ? `"${param}"` : param.toString()}`
    : 'undefined';
};
