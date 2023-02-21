import React, {useState, useEffect} from 'react'
import axios from 'axios'

import sunclouds from '../assets/sunnyclouds.png'

const WeatherCard = () => {

  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.23&longitude=21.01&hourly=temperature_2m&hourly=relativehumidity_2m&hourly=windspeed_10m&hourly=winddirection_10m')
      .then(res => {
        const data = res.data
        const hourly = data.hourly
        const temp = hourly.temperature_2m
        const time = hourly.time
        const wind = hourly.windspeed_10m
        const winddirection = hourly.winddirection_10m

        const datasource = temp.map((value, index) => ({
          date: (time[index]).slice(0, 10),
          hours: (time[index].slice(-5, -3)),
          value,
          wind: wind[index],
          winddirection: winddirection[index],
        }))

        console.log(datasource)
        setData(datasource)
      })
      .catch(err => { console.log(err) })
  }, []);

  function selectDay(number) {
    if (number === 1) {
      return 'Monday'
    } else if (number === 2){
      return 'Tueseday'
    } else if (number === 3){
      return 'Wednesday'
    } else if (number === 4){
      return 'Thursday'
    } else if (number === 5){
      return 'Friday'
    } else if (number === 6){
      return 'Saturday'
    } else if (number === 7){
      return 'Sunday'
    }
  }
  //  TODO: dynamic wybor miast, icony, prognoza na tydzien, prognoza dlugotermiunowa /  
  var today = new Date();
  var todayString;
  today.setDate(today.getDate());
  todayString = (today.getFullYear() + '-' + ('0' + (today.getMonth()+1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2));
  var now = ('0' + today.getHours()).slice(-2)
  var day = today.getDay();

  function handleWindDirection(direction) {
    if ((23 > direction >= 0) || (260 > direction > 337)) {
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
    <div className="bg-blue-800 h-screen text-white">
      <div className="grid grid-cols-4 bg-theme bg-cover">

        <div className="h-96 w-[60rem] justify-self-center rounded-3xl text-2xl">
          
          {data.length ?
            (data.filter(item => (item.date === todayString && item.hours === now)).map(item => 
              <div key={item.id} className="items-center text-center p-2 h-full flex flex-col">

                <div className="flex justify-around">{selectDay(day)}</div>
                <div>{item.date}</div>
                
                <div className="mt-auto flex flex-col">
                  <div className="flex justify-around mt-auto mb-0">
                    <div>{item.hours}:00</div>
                    <div>{item.value}°C</div>
                  </div>
                    <div>{item.wind } km/h - {handleWindDirection(item.winddirection)}</div>
                </div>
                
              </div>
            ))
              : null
          }
        </div>
        <div className="">
          
        </div>
        <div className="">
          
        </div>
        <div className="">

        </div>

      </div>
    </div>
  )
}

export default WeatherCard
