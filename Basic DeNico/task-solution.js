const deNico = (key, m) => {

    let keyArr = key.split(''),
        keySort = [...keyArr],
        keyIndex = [],
        keyLength = keyArr.length,
        resultStr = '';

    keySort.sort();

    keyArr.forEach((item) => {keyIndex.push(keySort.indexOf(item));});


    for (let i = 0; i < m.length; i += keyLength){
        let resWord = [];

        m.slice(i, i + keyLength).split('').forEach((item, index) => {
            resWord[keyIndex.indexOf(index)] = item;
        });


        resultStr += resWord.join('');
    }


    return resultStr.replace(/\s+$/g, '');
}