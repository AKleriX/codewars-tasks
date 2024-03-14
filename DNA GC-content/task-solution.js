const gcContent = (dna) => (dna.replace(/[^CG]/gi, '').length / dna.length) * 100 || 0;
