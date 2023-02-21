import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Test = () => {

  const [time, setTime] = useState([])
  const [temp, setTemp] = useState([])
  const [hum, setHum] = useState([])
  const [wind, setWind] = useState([])

  useEffect(() => {
    axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.23&longitude=21.01&hourly=temperature_2m&hourly=relativehumidity_2m&hourly=windspeed_10m')
      .then(res => {
        console.log(res.data)
        const data = res.data
        setTemp(data.hourly.temperature_2m)
        setHum(data.hourly.relativehumidity_2m)
        setTime(data.hourly.time)
        setWind(data.hourly.windspeed_10m)
      })
      .catch(err => { console.log(err) })
  }, []);


  return (
    <div className="w-[40rem] grid grid-cols-4 text-center">
      <header>Date</header>
      <header>Temperature</header>
      <header>Humidity</header>
      <header>Wind Speed</header>
      <div>
      {time.length ? (
          time.map(time =>
            <div
              className="bg-blue-300"
              key={time.id}
            >
              <div className="flex justify-around ">
                <div className="py-4">{time.slice(0, 10)}</div>
                <div className="py-4">{time.slice(11)}</div>
              </div>
            </div>)
        ) : null
        }
    </div>
    <div>
    {temp.length ? (
        temp.map(temp =>
          <div
            className="bg-blue-400"
            key={temp.id}
          >
            <div className="py-4">{ temp} C</div>

          </div>)
      ) : null
      }
      </div>
      <div>
      {hum.length ? (
          hum.map(hum =>
            <div
              className="bg-blue-300"
              key={hum.id}
            >
            <div className="py-4">{ hum} </div>
              

            </div>)
        ) : null
        }
      </div>
      <div>
      {wind.length ? (
          wind.map(wind =>
            <div
              className="bg-blue-300"
              key={wind.id}
            >
              <div className="py-4">{wind}km/h</div>
            </div>)
        ) : null
        }
    </div>
    </div>
  )
}

export default Test
