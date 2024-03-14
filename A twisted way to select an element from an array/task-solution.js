const select = (arrSearch, arrTake) => {
  const thirdLet = [...arrSearch].sort().reverse()[2][2],
    filtArr = arrTake.filter((s) => s[0] === thirdLet);
  return filtArr.length ? filtArr[0] : 'Nothing here';
};
