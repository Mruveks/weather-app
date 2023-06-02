import React, { useState, useEffect } from "react";
import axios from "axios";
import LineChart from "../components/charts/LineChart";
import Loader from "../components/Loader";
const HistoricalWeatherData = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://archive-api.open-meteo.com/v1/archive?latitude=52.23&longitude=21.01&start_date=2000-06-27&end_date=2023-05-28&hourly=temperature_2m"
				);

				const { temperature_2m, time } = response.data.hourly;

				const mergedData = temperature_2m.map((temperature, index) => {
					return {
						temperature_2m: temperature,
						time: time[index],
					};
				});
				setData(mergedData.slice(-3652));
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="w-screen px-40">
			<header className="text-4xl italic text-black  mt-10">
				Historical Temperature
			</header>
			<div className="">{data ? <LineChart data={data} /> : null}</div>
		</div>
	);
};

export default HistoricalWeatherData;
