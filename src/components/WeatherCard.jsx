import React, { useState, useEffect } from "react";
import axios from "axios";
import {
	TiWeatherCloudy,
	TiWeatherDownpour,
	TiWeatherNight,
	TiWeatherPartlySunny,
	TiWeatherShower,
	TiWeatherSunny,
	TiWeatherStormy,
	TiWeatherSnow,
	TiWeatherWindy,
} from "react-icons/ti";

import WeatherCode from "../utils/WeatherCode";
import SelectDay from "../utils/SelectDay";
import WeatherIcon from "../utils/WeatherIcon";
import WindDirection from "../utils/WindDirection";

const WeatherCard = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(
				`https://api.open-meteo.com/v1/forecast?latitude=52.23&longitude=21.01&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,winddirection_10m,weathercode`
			)
			.then((res) => {
				const data = res.data;
				const hourly = data.hourly;
				const temp = hourly.temperature_2m;
				const time = hourly.time;
				const wind = hourly.windspeed_10m;
				const winddirection = hourly.winddirection_10m;
				const weathercode = hourly.weathercode;

				const datasource = temp.map((value, index) => ({
					date: time[index].slice(0, 10),
					hours: time[index].slice(-5, -3),
					value,
					wind: wind[index],
					winddirection: winddirection[index],
					weathercode: weathercode[index],
				}));
				setData(datasource);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	var today = new Date();
	var todayString;
	today.setDate(today.getDate());
	todayString =
		today.getFullYear() +
		"-" +
		("0" + (today.getMonth() + 1)).slice(-2) +
		"-" +
		("0" + today.getDate()).slice(-2);
	const tomorrowString =
		today.getFullYear() +
		"-" +
		("0" + (today.getMonth() + 1)).slice(-2) +
		"-" +
		("0" + (today.getDate() + 1)).slice(-2);
	var now = ("0" + today.getHours()).slice(-2);
	var day = today.getDay();
	console.log(tomorrowString);

	return (
		<div className="grid bg-theme bg-cover w-screen text-white px-40 sm:px-10">
			<div className="sm:text-2xl">
				{data.length
					? data
							.filter((item) => item.date === todayString && item.hours === now)
							.map((item) => (
								<div
									key={item.id}
									className="flex flex-col lg:flex-row gap-2 items-center py-20"
								>
									<div className="grid-cols-2 items-center grid sm:text-center text-left lg:w-[50%] my-10 lg:my-2 border-gray-400 lg:border-r-2">
										<span>
											<header className="text-6xl">Warszawa</header>
											<div className="gap-2 text-2xl flex">
												<div className="">{<SelectDay number={day} />}</div>
												<div className="sm:text-xl sm:m-1">
													{item.date}, {item.hours}:00
												</div>
											</div>
										</span>
										<div className="flex lg:flex-col flex-col justify-between items-center text-center">
											<WeatherIcon
												icon={item.weathercode}
												size={140}
												time={item.hours}
											/>

											<div className="flex flex-col text-4xl ">
												{item.value}°C
												<div className="text-2xl">
													Wind: {item.wind} km/h -{" "}
													{<WindDirection direction={item.winddirection} />}
												</div>
											</div>
										</div>
									</div>

									<div className="text-center lg:w-[25%] my-10 lg:my-2 border-gray-400 lg:border-r-2">
										<header className="text-6xl">Night</header>
										<div className="flex justify-center">
											{data
												.filter(
													(item) =>
														item.date === tomorrowString && item.hours === "01"
												)
												.map((item) => (
													<div className="text-4xl">
														<WeatherIcon
															icon={item.weathercode}
															size={140}
															time={item.hours}
														/>
													</div>
												))}
										</div>
										{data
											.filter(
												(item) =>
													item.date === tomorrowString && item.hours === "01"
											)
											.map((item) => (
												<div className="text-2xl">
													<WeatherCode code={item.weathercode} />
												</div>
											))}
									</div>

									<div className="text-center lg:w-[25%] my-10 lg:my-2 border-gray-400 lg:border-r-2">
										<header className="text-6xl">Tomorrow</header>
										<div className="flex justify-center">
											{data
												.filter(
													(item) =>
														item.date === tomorrowString && item.hours === "12"
												)
												.map((item) => (
													<div className="text-4xl">
														<WeatherIcon
															icon={item.weathercode}
															size={140}
															time={item.hours}
														/>
													</div>
												))}
										</div>

										{data
											.filter(
												(item) =>
													item.date === tomorrowString && item.hours === "12"
											)
											.map((item) => (
												<div className="text-2xl">
													<WeatherCode code={item.weathercode} />
												</div>
											))}
									</div>
								</div>
							))
					: null}
			</div>
		</div>
	);
};

export default WeatherCard;
