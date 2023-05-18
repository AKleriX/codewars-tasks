const robot = (skinScan) => skinScan.map((l) => l.map((p) => (p == 'X' ? '*' : p)));
