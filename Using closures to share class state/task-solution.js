// Let's make a Cat constructor!
var Cat = (function () {
    let cats = [],
        constructor = function (name, weight) {
            if (!name || !weight){
                throw Error('Required parameters "name" and "weight" are not specified');
            }

            Object.defineProperty(this, 'name', {
                get: () => {return name;}
            });
            Object.defineProperty(this, 'weight', {
                get: () => {return weight},
                set: (newWeight) => {weight = newWeight
                    return weight}
            });

            cats.push(this);
        };
    constructor.averageWeight = () => {
        return cats.reduce((sum, cat) => { return sum + cat.weight }, 0) / cats.length;
    };
    return constructor;
}());