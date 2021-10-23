function list(names){
    if (names.length === 0) return '';
    return names.length > 1 ?
        names.map(item => item.name).slice(0, names.length - 1).join(', ') + ' & ' + names[names.length - 1].name :
        names[names.length - 1].name;
}