function toPretty(seconds) {
  if (!seconds) return `just now`;
  let minutes = seconds / 60;
  if (!Math.floor(minutes))
    return `${seconds > 1 ? seconds : 'a'} second${seconds > 1 ? 's' : ''} ago`;
  let hours = minutes / 60;
  if (!Math.floor(hours))
    return `${(minutes | 0) > 1 ? minutes | 0 : 'a'} minute${(minutes | 0) > 1 ? 's' : ''} ago`;
  let days = hours / 24;
  if (!Math.floor(days))
    return `${(hours | 0) > 1 ? hours | 0 : 'an'} hour${(hours | 0) > 1 ? 's' : ''} ago`;
  let weeks = days / 7;
  if (!Math.floor(weeks))
    return `${(days | 0) > 1 ? days | 0 : 'a'} day${(days | 0) > 1 ? 's' : ''} ago`;
  return `${(weeks | 0) > 1 ? weeks | 0 : 'a'} week${(weeks | 0) > 1 ? 's' : ''} ago`;
}
