function rank(st, we, n) {
    if (st.length === 0) return 'No participants';
    let rankNameArr = st.split(',').map((name, i) => {
        let nameRank = (name.toUpperCase().split('').reduce((sum, letter) => sum + letter.charCodeAt() - 64 , 0) + name.length) * we[i];
        return [nameRank, name];
    });
    rankNameArr.sort((a, b) => {
        if (a[0] !== b[0]) return b[0] - a[0];
        if (a[1].toLowerCase() > b[1].toLowerCase()) return 1;
        else if (a[1].toLowerCase() < b[1].toLowerCase()) return -1;
        return 0;
    });
    return n > st.split(',').length ? 'Not enough participants' : rankNameArr[n - 1][1];
}