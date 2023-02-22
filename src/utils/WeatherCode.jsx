export default function handleWeatherCode({code}) {
  if (code === 0) {
      return 'Clear sky'
    } else if (code === 1 || code === 2 || code === 3 ) {
      return 'Partly cloudy'
    } else if (code === 45 || code === 48 ) {
      return 'Fog'
    } else if (code === 51 || code === 53 || code === 55 ) {
      return 'Drizzle'
    } else if (code === 56 || code === 57 ) {
      return 'Freezing Drizzle'
    } else if (code === 61 || code === 63 || code === 65 ) {
      return 'Rain'
    } else if (code === 66 || code === 67 ) {
      return 'Freezing'
    } else if (code === 71 || code === 73 || code === 75 ) {
      return 'Snow fall'
    } else if (code === 77 ) {
      return 'Snow grains'
    } else if (code === 80 || code === 81 || code === 82 ) {
      return 'Rain showers'
    } else if (code === 85 || code === 86 ) {
      return 'Snow showers slight and heavy'
    } else if (code === 95 ) {
      return 'Thunderstorm: Slight or moderate'
    } else if (code === 96 || code === 99 ) {
      return 'Thunderstorm with slight and heavy hail'
    }
  }
