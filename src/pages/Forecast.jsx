import React, { useState, useEffect } from "react";
import axios from "axios";
import SelectDay from "../utils/SelectDay";
import WeatherCode from "../utils/WeatherCode";
import WeatherIcon from "../utils/WeatherIcon";
import WindDirection from "../utils/WindDirection";

const Forecast = () => {
	const [data, setData] = useState([]);
	const [city, setCity] = useState("Warszawa");
	const [lon, setLon] = useState(21.01);
	const [lat, setLat] = useState(52.23);

	function handleClickCity(lat, lon) {
		setLat(lat);
		setLon(lon);
	}

	useEffect(() => {
		axios
			.get(
				`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,apparent_temperature,winddirection_10m,snowfall,relativehumidity_2m,weathercode,windspeed_10m,cloudcover,rain,surface_pressure`
			)
			.then((res) => {
				const data = res.data;
				const hourly = data.hourly;

				const temp = hourly.temperature_2m;
				const time = hourly.time;
				const wind = hourly.windspeed_10m;
				const winddirection = hourly.winddirection_10m;
				const humidity = hourly.relativehumidity_2m;
				const cloud = hourly.cloudcover;
				const rain = hourly.rain;
				const snow = hourly.snowfall;
				const apparent_temperature = hourly.apparent_temperature;
				const pressure = hourly.surface_pressure;
				const weathercode = hourly.weathercode;

				const datasource = temp.map((value, index) => ({
					date: time[index].slice(0, 10),
					hours: time[index].slice(-5, -3),
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
				}));
				setData(datasource);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [lat]);

	var today = new Date();
	var todayString;
	today.setDate(today.getDate());
	todayString =
		today.getFullYear() +
		"-" +
		("0" + (today.getMonth() + 1)).slice(-2) +
		"-" +
		("0" + today.getDate()).slice(-2);
	var day = today.getDay();
	var todayDate;
	today.setDate(today.getDate());
	todayDate =
		("0" + today.getDate()).slice(-2) +
		"-" +
		("0" + (today.getMonth() + 1)).slice(-2) +
		"-" +
		today.getFullYear();
	const style = "flex gap-10 p-2 justify-between border-gray-400 border-b-2";

	return (
		<div className="lg:mt-5 text-black lg:px-40 px-10">
			<div className="grid grid-rows-2 lg:flex justify-center lg:px-2 lg:gap-4 text-4xl py-2 bg-gray-50 font-semibold italic border-y-2 border-gray-200">
				<div>{todayDate},</div>
				<SelectDay number={day} />
			</div>
			<header className="grid grid-cols-2 lg:flex lg:justify-between h-[20%] py-2 text-4xl">
				<button
					onClick={() => {
						handleClickCity(52.23, 21.01);
						setCity("Warszawa");
					}}
					className={`${city === "Warszawa" ? "text-orange-400" : ""}`}
				>
					Warszawa
				</button>
				<button
					onClick={() => {
						handleClickCity(50.06, 19.94);
						setCity("Krakow");
					}}
					className={`${city === "Krakow" ? "text-orange-400" : ""}`}
				>
					Kraków
				</button>
				<button
					onClick={() => {
						handleClickCity(54.35, 18.65);
						setCity("Gdansk");
					}}
					className={`${city === "Gdansk" ? "text-orange-400" : ""}`}
				>
					Gdańsk
				</button>
				<button
					onClick={() => {
						handleClickCity(52.41, 16.93);
						setCity("Poznan");
					}}
					className={`${city === "Poznan" ? "text-orange-400" : ""}`}
				>
					Poznań
				</button>
				<button
					onClick={() => {
						handleClickCity(51.77, 19.47);
						setCity("Lodz");
					}}
					className={`${city === "Lodz" ? "text-orange-400" : ""}`}
				>
					Łódź
				</button>
				<button
					onClick={() => {
						handleClickCity(51.1, 17.03);
						setCity("Wroclaw");
					}}
					className={`${city === "Wroclaw" ? "text-orange-400" : ""}`}
				>
					Wrocław
				</button>
				<button
					onClick={() => {
						handleClickCity(53.43, 14.55);
						setCity("Szczecin");
					}}
					className={`${city === "Szczecin" ? "text-orange-400" : ""}`}
				>
					Szczecin
				</button>
				<button
					onClick={() => {
						handleClickCity(50.26, 19.03);
						setCity("Katowice");
					}}
					className={`${city === "Katowice" ? "text-orange-400" : ""}`}
				>
					Katowice
				</button>
			</header>
			{data
				.filter((item) => item.date === todayString)
				.map((item, index) => (
					<div
						key={item.hours}
						className={`${
							index % 2 === 0 ? "bg-gray-100" : ""
						} flex gap-4 py-4 lg:gap-8 items-center justify-evenly text-black border-b-2 border-gray-200`}
					>
						<header className="text-4xl">{item.hours}:00</header>
						<WeatherIcon icon={item.weathercode} size={100} time={item.hours} />

						<div className="w-[10%] sm:w-auto md:w-auto text-center text-2xl">
							<div className="text-4xl text-orange-400">{item.value}°C</div>
							<div>
								<WeatherCode code={item.weathercode} />
							</div>
						</div>

						<div className="lg:grid sm:hidden md:hidden sm:w-fit w-72 text-xl">
							<div className={`${style}`}>
								<div className="text-gray-500">Apparent Temp</div>
								<div className="text-orange-400">
									{item.apparent_temperature}°C
								</div>
							</div>
							<div className={`${style}`}>
								<div className="text-gray-500">Wind</div>
								<div className="text-orange-400">{item.wind} km/h</div>
							</div>
							<div className={`${style}`}>
								<div className="text-gray-500">Wind Direction</div>
								<div className="text-orange-400">
									<WindDirection direction={item.winddirection} />
								</div>
							</div>
						</div>

						<div className="lg:grid sm:hidden md:hidden w-fit text-xl">
							<div className={`${style}`}>
								<div className="text-gray-500">Snow</div>
								<div className="text-orange-400">{item.snow} %</div>
							</div>
							<div className={`${style}`}>
								<div className="text-gray-500">Rain</div>
								<div className="text-orange-400">{item.rain} %</div>
							</div>
							<div className={`${style}`}>
								<div className="text-gray-500">Pressure</div>
								<div className="text-orange-400">{item.pressure} hPa</div>
							</div>
						</div>

						<div className="lg:grid sm:hidden md:hidden w-fit text-xl">
							<div className={`${style}`}>
								<div className="text-gray-500">Clouds</div>
								<div className="text-orange-400">{item.cloud} %</div>
							</div>
							<div className={`${style}`}>
								<div className="text-gray-500">Humidity</div>
								<div className="text-orange-400">{item.humidity} %</div>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default Forecast;
