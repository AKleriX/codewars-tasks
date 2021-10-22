function defaultArguments(func, params) {
    let funArgs = func.toString().replace(/\/\/.*|\/\*.*?\*\/|\s+/gm, '')
            .match(/\(.*?\)/).join('')
            .replace(/[\(\)]/gi,'')
            .split(',')
            .map(item => {
                if (item.includes('='))
                    item = item.slice(0, item.indexOf('='));
                return item;
            }),


        newArgsFunc = (...args) => {
            args = args.map(arg => arg === undefined ? 'noArg' : arg);
            for (let param in params)
                if (funArgs.includes(param) && !args[funArgs.indexOf(param)])
                    args[funArgs.indexOf(param)] = params[param];
            args = args.map(arg => arg === 'noArg' ? undefined : arg);

            newArgsFunc.toString = () => func.toString();

            return func(...args);
        }
    return newArgsFunc;
}