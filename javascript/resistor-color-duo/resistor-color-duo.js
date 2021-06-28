const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

export const decodedValue = (colors) => {
  return +(COLORS.indexOf(colors[0]).toString() + COLORS.indexOf(colors[1]).toString());
};
