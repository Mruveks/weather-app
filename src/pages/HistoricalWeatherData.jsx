import React, { useState, useEffect } from "react";
import axios from "axios";
import LineChart from "../components/charts/LineChart";
import HumidityChart from "../components/charts/HumidityChart";
import Loader from "../components/Loader";
const HistoricalWeatherData = () => {
	const [data, setData] = useState([]);
	const [humidityData, setHumidityData] = useState([]);
	const [pressureData, setPressureData] = useState([]);
	const [snowData, setSnowData] = useState([]);
  const [rainData, setRainData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://archive-api.open-meteo.com/v1/archive?latitude=52.23&longitude=21.01&start_date=2023-01-01&end_date=2023-05-28&hourly=rain,temperature_2m,surface_pressure,snowfall"
				);
				const response2 = await axios.get(
					"https://archive-api.open-meteo.com/v1/archive?latitude=52.23&longitude=21.01&start_date=2023-01-01&end_date=2023-05-28&hourly=relativehumidity_2m"
				);
				const { surface_pressure, temperature_2m, snowfall, rain, time } =
					response.data.hourly;
				const { relativehumidity_2m, time: time2 } = response2.data.hourly;
				console.log(response.data);

				const mergedData = temperature_2m.map((temperature, index) => {
					return {
						temperature_2m: temperature,
						time: time[index],
					};
				});
				setData(mergedData);

				const mergedData2 = relativehumidity_2m.map((humidity, index) => {
					return {
						relativehumidity_2m: humidity,
						time: time2[index],
					};
				});
				setHumidityData(mergedData2);

				const mergedPressureData = surface_pressure.map((pressure, index) => {
					return {
						surface_pressure: pressure,
						time: time[index],
					};
				});
				setPressureData(mergedPressureData);

				const mergedSnowData = snowfall.map((snow, index) => {
					return {
						snowfall: snow,
						time: time[index],
					};
				});
        setSnowData(mergedSnowData);
        
        const mergedRainData = rain.map((rains, index) => {
					return {
						rain: rains,
						time: time[index],
					};
				});
        setRainData(mergedRainData);
        
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="w-screen px-10 sm:px-40">
			<header className="text-4xl italic text-black  mt-10">Temperature</header>
			<div className="">
				{data ? <LineChart data={data} dataKey="temperature_2m" /> : null}
			</div>
			<header className="text-4xl italic text-black  mt-10">Hummidity</header>
			<div className="">
				{humidityData ? (
					<LineChart data={humidityData} dataKey="relativehumidity_2m" />
				) : null}
			</div>
			<header className="text-4xl italic text-black  mt-10">Pressure</header>
			<div className="">
				{pressureData ? (
					<LineChart data={pressureData} dataKey="surface_pressure" />
				) : null}
      </div>
      <header className="text-4xl italic text-black  mt-10">Snowfall</header>
			<div className="">
				{snowData ? (
					<LineChart data={snowData} dataKey="snowfall" />
				) : null}
      </div>
      <header className="text-4xl italic text-black  mt-10">Rain</header>
			<div className="">
				{rainData ? (
					<LineChart data={rainData} dataKey="rain" />
				) : null}
			</div>
		</div>
	);
};

export default HistoricalWeatherData;
