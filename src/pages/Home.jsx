import React, { useState, useEffect } from 'react'
import axios from 'axios';
import SelectDay from '../utils/SelectDay';
import WeatherIcon from '../utils/WeatherIcon';
const Home = () => {

  const [data, setData] = useState([])

  const [sunrise, setSunrise] = useState([])
  const [sunset, setSunset] = useState([])
  const [uv, setUv] = useState([])
  const [radiation, setRadiation] = useState([])
  
  useEffect(() => {
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.23&longitude=21.01&hourly=temperature_2m,weathercode,apparent_temperature,winddirection_10m,snowfall,relativehumidity_2m,windspeed_10m,cloudcover,rain,surface_pressure&daily=sunrise,sunset,shortwave_radiation_sum,uv_index_max&timezone=Europe%2FLondon')
      .then(res => {
        const data = res.data
        const hourly = data.hourly
        const daily = data.daily

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
        
        const radiation = daily.shortwave_radiation_sum[0]
        const sunrise = daily.sunrise[0]
        const sunset = daily.sunset[0]
        const uv_index = daily.uv_index_max[0]

        setSunrise(sunrise)
        setSunset(sunset)
        setRadiation(radiation)
        setUv(uv_index)


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
          weathercode: weathercode[index]
        }))

        console.log(datasource)
        setData(datasource)
      })
      .catch(err => { console.log(err) })
  }, []);

  var today = new Date();
  var todayString;
  today.setDate(today.getDate());
  todayString = (today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2));
  var tomorrowString = (today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + (today.getDate() + 1)).slice(-2));
  var dayAfterTomorrow = (today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + (today.getDate() + 2)).slice(-2));
  var day = today.getDay();
  var day2 = today.getDay() + 2;
  

  const style = "flex p-2 justify-between border-gray-400 border-b-2"

  return (
    <div className="flex lg:flex-row flex-col lg:mx-40 lg:mt-5 text-lg ">
      
      {data.filter(item => (item.date === tomorrowString && item.hours === '01')).map(item =>
        <div className="bg-blue-500 p-6 lg:w-[20%] md:px-40 text-center w-screen">
          
          <header className="text-4xl">Night</header>
          <div className="flex justify-center gap-2 items-center">
            <p className="text-4xl">{item.value}°C</p>
            <WeatherIcon icon={item.weathercode} size={100} time={item.hours} />
          </div>
          <div className={`${style}`}>
            <header>Apparent temperature</header>
            <p>{item.apparent_temperature}°C</p>
          </div>
          <div className={`${style}`}>
            <header>Wind</header>
            <p>{item.wind} km/h</p>
          </div>
          <div className={`${style}`}>       
            <header>Humidity</header>        
            <p>{item.humidity}%</p>
          </div> 
          <div className={`${style}`}>       
            <header>Clouds</header>        
            <p>{item.cloud}%</p>
          </div>         
          <div className={`${style}`}>           
            <header>Rain</header>           
            <p>{item.rain}%</p>
          </div>
          <div className={`${style}`}>           
            <header>Snow</header>           
            <p>{item.snow}%</p>
          </div>
          <div className={`${style}`}>           
            <header>Pressure</header>           
            <p>{item.pressure} hPa</p>
          </div>   
        </div>
      )}

      {data.filter(item => (item.date === tomorrowString && item.hours === '12')).map(item =>
        <div className="bg-gray-50 p-6  md:px-40 lg:w-[40%] text-center text-black border-gray-200 border-r-2">
            
            <header className="text-4xl">Tomorrow</header>
            <div className="flex justify-center gap-2 items-center">
              <p className="text-4xl">{item.value}°C</p>
              <WeatherIcon icon={item.weathercode} size={100} time={item.hours} />
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
              <div className={`${style}`}>
                <header>Apparent temperature</header>
                <p>{item.apparent_temperature}°C</p>
              </div>
              <div className={`${style}`}>
                <header>Wind</header>
                <p>{item.wind} km/h</p>
              </div>
              <div className={`${style}`}>       
                <header>Humidity</header>        
                <p>{item.humidity}%</p>
              </div> 
              <div className={`${style}`}>       
                <header>Clouds</header>        
                <p>{item.cloud}%</p>
                </div>
              </div>
              
              <div>
              <div className={`${style}`}>
                <header>Rain</header>
                <p>{item.rain}°C</p>
              </div>
              <div className={`${style}`}>           
                <header>Snow</header>           
                <p>{item.snow}%</p>
              </div>
              <div className={`${style}`}>
                <header>Pressure</header>
                <p>{item.pressure} hPa</p>
              </div>            
            </div>               
        </div>
      </div>  
      )}

      {data.filter(item => (item.date === dayAfterTomorrow && item.hours === '12')).map(item =>
        <div className="bg-gray-50 p-6 lg:w-[20%] md:px-40 text-center text-black">
          <header className="text-4xl">{<SelectDay number={day2} />}</header>
          <div className="flex justify-center gap-2 items-center">
            <p className="text-4xl">{item.value}°C</p>
            <WeatherIcon icon={item.weathercode} size={100} time={item.hours} />
          </div>
          <div className={`${style}`}>
            <header>Apparent temperature</header>
            <p>{item.apparent_temperature}°C</p>
          </div>
          <div className={`${style}`}>
            <header>Wind</header>
            <p>{item.wind} km/h</p>
          </div>
          <div className={`${style}`}>       
            <header>Humidity</header>        
            <p>{item.humidity}%</p>
          </div> 
          <div className={`${style}`}>       
            <header>Clouds</header>        
            <p>{item.cloud}%</p>
          </div>         
          <div className={`${style}`}>           
            <header>Rain</header>           
            <p>{item.rain}%</p>
          </div>
          <div className={`${style}`}>           
            <header>Snow</header>           
            <p>{item.snow}%</p>
          </div>
            <div className={`${style}`}>           
            <header>Pressure</header>           
            <p>{item.pressure} hPa</p>
          </div>     
        </div>
      )}    
   
      <div className="bg-gray-200 lg:m-10 p-6 lg:w-[20%] md:px-40 text-left text-black">
          <header className="text-md">Today it's...</header>          
        <header className="text-4xl">{<SelectDay number={day} />}</header>
          <div className={`${style}`}>
            <header>Sunrise</header>
            <p>{sunrise.slice(11)}</p>
          </div>
          <div className={`${style}`}>
            <header>Sunset</header>
            <p>{sunset.slice(11)}</p>
          </div>
          <div className={`${style}`}>       
            <header>UV Index</header>        
            <p>{uv}</p>
          </div> 
          <div className={`${style}`}>       
            <header>Radiation</header>        
            <p>{radiation} MJ/m2</p>
          </div>            
        </div>
        
    </div>
  )
}

export default Home
