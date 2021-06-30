export const hey = (message) => {
  const trimmedMessage = message.trim();
  const regex = new RegExp('[a-zA-Z]');
  if (!trimmedMessage) {
    return 'Fine. Be that way!';
  }
  if (trimmedMessage.split('')[trimmedMessage.length - 1] === '?') {
    if (message === message.toUpperCase() && regex.test(message)) {
      return `Calm down, I know what I'm doing!`;
    }
    return 'Sure.';
  }
  if (message === message.toUpperCase() && regex.test(message.toLowerCase())) {
    return 'Whoa, chill out!';
  }
  return 'Whatever.';
};
