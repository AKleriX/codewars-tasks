function DNAStrand(dna){
    return dna.split('').map(s => {
        switch (s){
            case 'A':
                return 'T';
            case 'T':
                return 'A';
            case 'C':
                return 'G';
            case 'G':
                return 'C';
        }
    }).join('');
}