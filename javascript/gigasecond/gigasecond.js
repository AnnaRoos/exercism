export const gigasecond = (date) => {
  const dateInMilliseconds = date.getTime();
  const newDate = dateInMilliseconds + 1000000000000;
  return new Date(newDate);
};


