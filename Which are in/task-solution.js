function inArray(array1,array2){
    return array1.filter(str => {
        let includesStr = false;
        array2.forEach(s =>{
            if (s.indexOf(str) !== -1) {
                includesStr = true
                return;
            }
        });
        return includesStr;
    }).sort();
}