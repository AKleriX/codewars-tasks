// Return the output array, and ignore all non-op characters
function parse( data )
{
    let value = 0,
        resultArr = [];
    data.split('').forEach(com => {
        switch (com){
            case 'i':
                value++;
                break;
            case 'd':
                value--;
                break;
            case 's':
                value *= value;
                break;
            case 'o':
                resultArr.push(value);
                break;
        }
    });
    return resultArr;
}