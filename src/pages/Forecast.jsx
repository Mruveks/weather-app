import React, {useState, useEffect} from 'react'
import axios from 'axios';
import SelectDay from '../utils/SelectDay';
import WeatherCode from '../utils/WeatherCode'
import WeatherIcon from '../utils/WeatherIcon';
const Forecast = () => {

  const [data, setData] = useState([])


  useEffect(() => {
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.23&longitude=21.01&hourly=temperature_2m,apparent_temperature,winddirection_10m,snowfall,relativehumidity_2m,weathercode,windspeed_10m,cloudcover,rain,surface_pressure')
      .then(res => {
        const data = res.data
        const hourly = data.hourly

        const temp = hourly.temperature_2m
        const time = hourly.time
        const wind = hourly.windspeed_10m
        const winddirection = hourly.winddirection_10m
        const humidity = hourly.relativehumidity_2m
        const cloud = hourly.cloudcover
        const rain = hourly.rain
        const snow = hourly.snowfall
        const apparent_temperature = hourly.apparent_temperature
        const pressure = hourly.surface_pressure
        const weathercode = hourly.weathercode

        const datasource = temp.map((value, index) => ({
          date: (time[index]).slice(0, 10),
          hours: (time[index].slice(-5, -3)),
          value,
          wind: wind[index],
          winddirection: winddirection[index],
          humidity: humidity[index],
          cloud: cloud[index],
          rain: rain[index],
          snow: snow[index],
          apparent_temperature: apparent_temperature[index],
          pressure: pressure[index],
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
  var day = today.getDay();
  
  const style = "flex gap-10 p-2 justify-between border-gray-400 border-b-2"

  return (

    <div className="sm:mx-40 sm:mt-5 text-black">
      <header className="flex h-[20%] justify-between text-4xl text-orange-400">
        <button>Warszawa</button>
        <button>Kraków</button>
        <button>Gdask</button>
        <button>Poznań</button>
        <button>Łódź</button>
        <button>Wrocław</button>
        <button>Szczecin</button>
        <button>Katowice</button>
      </header>

      <div className="text-4xl py-2 bg-gray-100 font-bold">
        {<SelectDay number={day}/>}, {todayString}
      </div>

      {data.filter(item => item.date === todayString).map(item =>
        <div key={item.id} className="flex justify-start gap-10 sm:px-10 sm:py-5 items-center text-center text-black border-b-2 border-gray-400">

          <header className="text-4xl">{item.hours}:00</header>
          <WeatherIcon icon={item.weathercode} size={100} time={item.hours}/>
          
          <div className="text-left w-[10%] text-2xl">
            <div className="text-4xl">{item.value}°C</div>
            <div>{<WeatherCode code={item.weathercode} />}</div>
          </div>
           
          <div className="grid sm:w-[20%] text-xl">
            <div className={`${style}`}>
              <div className="text-gray-500">Apparent Temp</div>
              <div>{item.apparent_temperature}°C</div>
            </div>
            <div className={`${style}`}>
              <div className="text-gray-500">Wind</div>
              <div>{item.wind} km/h</div>
            </div>
            <div className={`${style}`}>
              <div className="text-gray-500">Wind Direction</div>
              <div>{item.winddirection}</div>
            </div>
          </div>

          <div className="grid sm:w-[20%] text-xl">
            <div className={`${style}`}>
              <div className="text-gray-500">Snow</div>
              <div>{item.snow} %</div>
            </div>
            <div className={`${style}`}>
              <div className="text-gray-500">Rain</div>
              <div>{item.rain} %</div>
            </div>
            <div className={`${style}`}>
              <div className="text-gray-500">Pressure</div>
              <div>{item.pressure} hPa</div>
            </div>
          </div>

          <div className="grid sm:w-[20%] text-xl">
            <div className={`${style}`}>
              <div className="text-gray-500">Clouds</div>
              <div>{item.cloud} %</div>
            </div>
            <div className={`${style}`}>
              <div className="text-gray-500">Humidity</div>
              <div>{item.humidity} %</div>
            </div>
          </div>


        </div>
      )} 
    </div>
  )
}

export default Forecast
