const generateRules = (func, portList) => portList.map((p) => func(p)).join('');
