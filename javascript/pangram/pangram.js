export const isPangram = (sentence) => {
  const letters = ('abcdefghijklmnopqrstuvwxyz').split('');

  for (let i = 0; i < letters.length; i++) {
    if (!sentence.toLowerCase().includes(letters[i])) {
      return false;
    }
  }

  return true;
};
