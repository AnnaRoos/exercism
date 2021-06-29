export const age = (planet, seconds) => {
  const secondsInEarthYears = seconds / 31557600;
  switch (planet) {
    case 'earth':
      return +secondsInEarthYears.toFixed(2);
    case 'venus':
      return +(secondsInEarthYears / 0.61519726).toFixed(2);
    case 'mercury':
      return +(secondsInEarthYears / 0.2408467).toFixed(2);
    case 'uranus':
      return +(secondsInEarthYears / 84.016846).toFixed(2);
    case 'mars':
      return +(secondsInEarthYears / 1.8808158).toFixed(2);
    case 'neptune':
      return +(secondsInEarthYears / 164.79132).toFixed(2);
    case 'saturn':
      return +(secondsInEarthYears / 29.447498).toFixed(2);
    case 'jupiter':
      return +(secondsInEarthYears / 11.862615).toFixed(2);
    default:
      break;
  }
};
