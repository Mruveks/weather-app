export default function WeatherCode({code}) {
  if (code === 0) {
      return 'Clear sky'
    } else if (code === 1 ) {
      return 'Mainly clear'
    } else if (code === 2 ) {
      return 'Partly cloudy'
    } else if (code === 3 ) {
      return 'Overcast'
    } else if (code === 45 ) {
      return 'Fog'
    } else if (code === 48 ) {
      return 'Depositing rime fog'
    } else if (code === 51 ) {
      return 'Light drizzle'
    } else if (code === 54 ) {
      return 'Moderate drizzle'
    } else if (code === 55 ) {
      return 'Dense drizzle'
    } else if (code === 56 ) {
      return 'Light freezing drizzle'
    } else if (code === 57 ) {
      return 'Dense freezing drizzle'
    } else if (code === 61 ) {
      return 'Slight rain'
    } else if (code === 63 ) {
      return 'Moderate rain'
    } else if (code === 65 ) {
      return 'Heavy rain'
    } else if (code === 66 ) {
      return 'Light freezing rain'
    } else if (code === 67 ) {
      return 'Heavy freezing rain'
    } else if (code === 71 ) {
      return 'Slight Snow fall'
    } else if (code === 73 ) {
      return 'Moderate Snow fall'
    } else if (code === 75 ) {
      return 'Heavy Snow fall'
    } else if (code === 77 ) {
      return 'Snow grains'
    } else if (code === 80 ) {
      return 'Slight rain showers'
    } else if (code === 81 ) {
      return 'Moderate rain showers'
    } else if (code === 82 ) {
      return 'Violent rain showers'
    } else if (code === 85 ) {
      return 'Slight snow showers'
    } else if (code === 86 ) {
      return 'Heavy snow showers'
    } else if (code === 95 ) {
      return 'Slight Thunderstorm'
    } else if (code === 96 ) {
      return 'Thunderstorm with slight hail'
    } else if (code === 99 ) {
      return 'Thunderstorm with heavy hail'
    }
  }
