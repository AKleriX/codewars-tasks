String.prototype.isLetter = function () {
  const dict =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÀÁÂÃÄÅÆÇČÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛŮÜÝÞßàáâãäåæçèéêëìíîïśðñòóôõöøùúûüýþÿ';
  return this.length === 1 && dict.includes(this);
};
