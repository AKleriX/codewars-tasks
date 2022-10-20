const isSameLanguage = (list) =>
  list.every((p, i, arr) => !i || arr[i - 1].language === p.language);
