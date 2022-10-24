const toTime = (seconds) =>
  `${(seconds / 3600) | 0} hour(s) and ${((seconds % 3600) / 60) | 0} minute(s)`;
