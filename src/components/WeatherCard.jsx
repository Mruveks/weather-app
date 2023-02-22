import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {TiWeatherCloudy, TiWeatherDownpour, TiWeatherNight, TiWeatherPartlySunny, TiWeatherShower, TiWeatherSunny, TiWeatherStormy, TiWeatherSnow, TiWeatherWindy} from 'react-icons/ti'

import WeatherCode from '../utils/WeatherCode'
import SelectDay from '../utils/SelectDay'
import WeatherIcon from '../utils/WeatherIcon'

const WeatherCard = () => {

  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get(`https://api.open-meteo.com/v1/forecast?latitude=52.23&longitude=21.01&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,winddirection_10m,weathercode`)
      .then(res => {
        const data = res.data
        const hourly = data.hourly
        const temp = hourly.temperature_2m
        const time = hourly.time
        const wind = hourly.windspeed_10m
        const winddirection = hourly.winddirection_10m
        const weathercode = hourly.weathercode

        const datasource = temp.map((value, index) => ({
          date: (time[index]).slice(0, 10),
          hours: (time[index].slice(-5, -3)),
          value,
          wind: wind[index],
          winddirection: winddirection[index],
          weathercode: weathercode[index],
        }))
        setData(datasource)
      })
      .catch(err => { console.log(err) })
  }, []);

  var today = new Date();
  var todayString;
  today.setDate(today.getDate());
  todayString = (today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2));
  const tomorrowString = (today.getFullYear() + '-' + ('0' + (today.getMonth()+1)).slice(-2) + '-' + ('0' + (today.getDate() + 1)).slice(-2));
  var now = ('0' + today.getHours()).slice(-2)
  var day = today.getDay();
  console.log(tomorrowString)

  function handleWindDirection(direction) {
    if ((23 > direction >= 0) || (260 > direction >= 337)) {
      return 'North'
    } else if (68 > direction >= 24){
      return 'North-East'
    } else if (113 > direction >= 69){
      return 'East'
    } else if (158 > direction >= 114){
      return 'South-East'
    } else if (203 > direction >= 159){
      return 'South'
    } else if (248 > direction >= 204){
      return 'South-West'
    } else if (293 > direction >= 249){
      return 'West'
    } else if (336 > direction >= 294){
      return 'North-West'
    }
  }

  return (
      <div className="grid bg-theme bg-cover w-screen text-white sm:px-40 px-10 ">
        <div className="sm:text-2xl">
          {data.length ?
            (data.filter(item => (item.date === todayString && item.hours === now)).map(item => 
              <div key={item.id} className="flex sm:flex-row flex-col gap-2">

                
                <div className="text-center sm:text-left sm:w-[50%] sm:my-10 my-2 p-4 sm:border-gray-400 sm:border-r-2">

                  <header className="text-4xl ">Warszawa</header>
                  <div className="gap-2 flex justify-center sm:justify-start">
                    <div className="">{<SelectDay number={day} />}</div>
                    <div className="sm:text-xl sm:m-1">{item.date}, {item.hours}:00</div>
                  </div>

                  <div className="flex sm:flex-row flex-col justify-between items-center">
                    <WeatherIcon icon={item.weathercode} size={200} time={item.hours}/>
                    
                    <div className="flex flex-col text-8xl ">
                      {item.value}°C
                      <div className="text-xl pt-2">Wind: {item.wind} km/h - {handleWindDirection(item.winddirection)}</div>
                    </div>

                    <div className="flex flex-col text-xl text-center">
                      <header>Air Quality</header>
                      <div className="bg-green-300 bold">GOOD</div>
                    </div>                   
                  </div>

                  <div className="mt-2 sm:mt-10 text-yellow-200 flex justify-between items-center">
                    <header>Forecast:</header>
                    <button>Hourly</button>
                    <button>5-days</button>
                    <button>March</button>
                  </div>
                </div>

                <div className="text-center sm:w-[25%] sm:my-10 my-2 p-4 sm:border-gray-400 sm:border-r-2">
                  <header className="text-4xl">Night</header>
                  <div className="flex justify-center">
                    {(data.filter(item => (item.date === tomorrowString && item.hours === '01')).map(item =>
                      <div>{<WeatherIcon icon={item.weathercode} size={140} time={item.hours} />}</div>))}
                  </div>

                  <div>{(data.filter(item => (item.date === tomorrowString && item.hours === '01')).map(item => <div>{<WeatherCode code={item.weathercode} />}</div>))}</div>
                </div>

                <div className="text-center sm:w-[25%] sm:my-10 my-2 p-4 sm:border-gray-400 sm:border-r-2">
                  <header className="text-4xl">Tomorrow</header>
                  <div className="flex justify-center">
                    {(data.filter(item => (item.date === tomorrowString && item.hours === '12')).map(item =>
                      <div>{<WeatherIcon icon={item.weathercode} size={140} time={item.hours} />}</div>))}
                  </div>

                  <div>{(data.filter(item => (item.date === tomorrowString && item.hours === '12')).map(item => <div>{<WeatherCode code={item.weathercode} />}</div>))}</div>
                </div>

              </div>
            ))
              : null
          }
        </div>
      </div>

  )
}

export default WeatherCard
