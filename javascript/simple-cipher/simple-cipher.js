export class Cipher {
  LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
  #key;
  constructor(key) {
    this.#key = key ? key : this.createRandomKey();
  }

  createRandomKey() {
    let randomKey = '';
    for (let i = 0; i < 100; i++) {
      randomKey += String.fromCharCode(
        Math.floor(Math.random() * 26) + 65
      ).toLowerCase();
    }
    return randomKey;
  }

  encode(message) {
    const answer = this.translate(message, 'encode');
    return answer;
  }

  decode(message) {
    const answer = this.translate(message, 'decode');
    return answer;
  }

  translate(message, type) {
    if (message.length > this.key.length) {
      const timesToAddKey = Math.floor(message.length / this.key.length);
      for (let i = 0; i < timesToAddKey; i++) {
        this.#key += this.#key;
      }
    }
    const newMessageInNumbers = message.split('').map((letter) => {
      return this.LETTERS.indexOf(letter);
    });
    const keyInNumbers = this.key
      .substring(0, message.length)
      .split('')
      .map((letter) => {
        return this.LETTERS.indexOf(letter);
      });

    let codedMessageInNumbers;
    if (type === 'encode') {
      codedMessageInNumbers = newMessageInNumbers.map((number, i) => {
        return (number + keyInNumbers[i]) % 26;
      });
    } else if (type === 'decode') {
      codedMessageInNumbers = newMessageInNumbers.map((number, i) => {
        if (number - keyInNumbers[i] >= 0) {
          return number - keyInNumbers[i];
        } else {
          return 26 + (number - keyInNumbers[i]);
        }
      });
    }

    const codedMessage = codedMessageInNumbers.map((number) => {
      return this.LETTERS[number];
    });
    return codedMessage.join('');
  }

   get key() {
    return this.#key;
  } 
}
