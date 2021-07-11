export const answer = (question) => {
  const withoutQuestionMark = question.replace(/\?/, '');
  const arrayOFWords = withoutQuestionMark.split(' ');
  const regexNumbersAndOperators = /\d|plus|minus|multiplied|divided/g;
  const regexOperators = /plus|minus|multiplied|divided/;
  const regexNumbers = /\d/;
  const regexCorrectStart = /What is/;

  if (!regexCorrectStart.test(withoutQuestionMark)) {
    throw new Error('Unknown operation');
  }

  if (arrayOFWords.length < 3) {
    throw new Error('Syntax error');
  }

  if (arrayOFWords.length === 4 && !regexOperators.test(withoutQuestionMark)) {
    throw new Error('Unknown operation');
  }

  if (arrayOFWords.length === 4 && regexNumbers.test(withoutQuestionMark) && regexOperators.test(withoutQuestionMark)) {
    throw new Error('Syntax error');
  }

  
  for (let i = 2; i < arrayOFWords.length; i++) {
    if (regexNumbers.test(arrayOFWords[i]) && regexNumbers.test(arrayOFWords[i + 1])) {
      throw new Error('Syntax error');
    }
    if (regexOperators.test(arrayOFWords[i]) && regexOperators.test(arrayOFWords[i + 1])) {
      throw new Error('Syntax error');
    }
  }

 

  const filteredQuestion = arrayOFWords
    .filter((word) => {
      return word.match(regexNumbersAndOperators);
    })
    .map((word) => {
      if (+word) {
        return +word;
      } else {
        return word;
      }
    });

  let total = filteredQuestion[0];
  for (let i = 1; i < filteredQuestion.length; i++) {
    if (filteredQuestion[i] === 'plus') {
      total += filteredQuestion[i + 1];
    } else if (filteredQuestion[i] === 'minus') {
      total -= filteredQuestion[i + 1];
    } else if (filteredQuestion[i] === 'multiplied') {
      total *= filteredQuestion[i + 1];
    } else if (filteredQuestion[i] === 'divided') {
      total /= filteredQuestion[i + 1];
    }
  }

  return total;
};
