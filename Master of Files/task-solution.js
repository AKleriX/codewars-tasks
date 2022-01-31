String.prototype.isAudio = function(){
  return /^[^\s\d]+\.((mp3)|(flac)|(alac)|(aac))$/.test(this);
};
String.prototype.isImage= function(){
  return /^[^\s\d]+\.((jpg)|(jpeg)|(png)|(bmp)|(gif))$/.test(this);
};