function SubstringTest(str1, str2) {
  for (let i = 0; i < str1.length - 2; i++)
    for (let j = i + 2; j < str1.length; j++)
      if (str2.toLowerCase().includes(str1.slice(i, j).toLowerCase())) return true;
  return false;
}
