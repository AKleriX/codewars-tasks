let dic = {};

function bruteForceDetected(loginRequest) {
  if (!loginRequest.successful) dic[loginRequest.sourceIP] = (dic[loginRequest.sourceIP] || 0) + 1;
  else dic[loginRequest.sourceIP] = 0;
  if (dic[loginRequest.sourceIP] >= 20) return true;
  return false;
}
