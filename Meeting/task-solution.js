function meeting(s) {
    return s.toUpperCase().split(';').map(name => {
        name = name.split(':');
        return '(' + name[1] + ', ' + name[0] + ')';
    }).sort().join('');
}