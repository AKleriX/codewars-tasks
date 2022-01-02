function mostMoney(students) {
    let max = -1,
        nameMax = '',
        count = 0;
    students.forEach(s => {
        let studentMoney = s.fives * 5 + s.tens * 10 + s.twenties * 20;
        if (studentMoney === max) count++;
        else if (studentMoney > max){
            max = studentMoney;
            nameMax = s.name;
        }
    });
    return (count > 0 && count === students.length - 1) ? 'all' : nameMax;
}