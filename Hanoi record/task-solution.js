// recursive solution
const hanoiRec = disks => disks ? 1 + 2 * hanoiRec(disks - 1) : 0;

// the best solution
const hanoi = disks => 2 ** disks - 1;