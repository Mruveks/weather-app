import {TiWeatherCloudy, TiWeatherDownpour, TiWeatherNight, TiWeatherPartlySunny, TiWeatherShower, TiWeatherSunny, TiWeatherStormy, TiWeatherSnow} from 'react-icons/ti'

export default function WeatherIcon({icon, size, time}) {
  if ((icon === 0) && (time >= 19 || 6 > time)) {
    return <TiWeatherNight size={size}/> 
    } else if ((icon === 0) && (time < 22 && 6 <= time)) {
      return <TiWeatherSunny size={size}/>
    } else if ((icon === 1 || icon === 2 || icon === 3) && (time >= 19 || 6 > time)) {
      return <TiWeatherCloudy size={size}/>
    } else if ((icon === 1 || icon === 2 || icon === 3) && (time < 19 && 6 <= time)) {
      return <TiWeatherPartlySunny size={size}/>
    } else if (icon === 45 || icon === 48 ) {
      return <TiWeatherCloudy size={size}/>      
    } else if (icon === 51 || icon === 53 || icon === 55 ) {
      return <TiWeatherShower size={size}/>
    } else if (icon === 56 || icon === 57 ) {
      return 
    } else if (icon === 61 || icon === 63 || icon === 65 ) {
      return <TiWeatherDownpour size={size}/>
    } else if (icon === 66 || icon === 67 ) {
      return <TiWeatherDownpour size={size}/>
    } else if (icon === 71 || icon === 73 || icon === 75 ) {
      return <TiWeatherSnow size={size}/>
    } else if (icon === 77 ) {
      return <TiWeatherSnow size={size}/>
    } else if (icon === 80 || icon === 81 || icon === 82 ) {
      return <TiWeatherShower size={size}/>
    } else if (icon === 85 || icon === 86 ) {
      return <TiWeatherSnow size={size}/>
    } else if (icon === 95 ) {
      return <TiWeatherStormy size={size}/>
    } else if (icon === 96 || icon === 99 ) {
      return <TiWeatherStormy size={size}/>
    }
  }
