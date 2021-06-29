export const toRna = (dna) => {
  const rna = dna.split('').map((el) => {
    switch (el) {
      case '':
        return '';
      case 'G':
        return 'C';
      case 'C':
        return 'G';
      case 'T':
        return 'A';
      case 'A':
        return 'U';
      default:
        break;
    }
  });

  return rna.join('');
};
