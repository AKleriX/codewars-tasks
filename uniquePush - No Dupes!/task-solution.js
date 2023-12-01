//only push obj onto arr if it has a unique phoneNumber
const uniquePush = (arr, obj) => {
  if (obj.phoneNumber && arr.every((o) => o.phoneNumber !== obj.phoneNumber)) {
    arr.push(obj);
    return true;
  }
  return false;
};
