const runYourString = (arg, obj) => eval(`(${obj.param}) => {${obj.func}}`)(arg);
