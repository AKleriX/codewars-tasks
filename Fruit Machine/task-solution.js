function fruit(reels, spins){
    let scoreMap = ['Jack', 'Queen', 'King', 'Bar', 'Cherry', 'Seven', 'Shell', 'Bell', 'Star', 'Wild'],
        [r1, r2, r3] = reels.map((r, i) => scoreMap.indexOf(r[spins[i]]) + 1).sort((a, b) => a - b);
    if (r1 === r2 && r1 === r3) return r1 * 10;
    if (r1 === r2) return r3 === 10 ? r1 * 2 : r1;
    return r2 === r3 ? r2 : 0;
}