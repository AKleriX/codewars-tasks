const cleanedCounts = (data) => {
  const resData = [];
  for (let i = 0; i < data.length; i++)
    resData.push(!i || resData[i - 1] <= data[i] ? data[i] : data[i] + 1);
  return resData;
};
