const chineseZodiac = (year) =>
  `${elements[(((year - 1924) / 2) | 0) % 5]} ${animals[(year - 1924) % 12]}`;
