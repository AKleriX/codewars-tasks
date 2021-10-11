function spyOn (func) {

    let calls = 0,
        all = [],
        val;

    let spy = (...args) => {
        calls++;
        all.push(...args);
        val = func.apply(this, args);
        return val;
    }

    spy.callCount = () => calls;
    spy.wasCalledWith = (x) => all.some((a) => x === a);
    spy.returned = (x) => x === val;

    return spy;

}