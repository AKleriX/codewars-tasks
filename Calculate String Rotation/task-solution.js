function shiftedDiff(first,second){
    return first.length === second.length ? (second + second).indexOf(first) : -1;
}