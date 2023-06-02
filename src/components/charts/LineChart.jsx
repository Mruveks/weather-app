import React, { useState, useEffect } from "react";
import {
	ResponsiveContainer,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	AreaChart,
	Brush,
	Label,
	Area,
} from "recharts";
import Loader from "../Loader";
import moment from "moment";

const LineChart = ({ data }) => {
	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			const { temperature_2m, time } = payload[0].payload;
			const formattedTime = moment(time).format("YYYY-MM-DD, HH:mm");

			return (
				<div className="custom-tooltip bg-gray-400 p-2 rounded-xl">
					<p className="label">{temperature_2m}°C</p>
					<p className="desc">{formattedTime}</p>
				</div>
			);
		}
	};

	return data && data.length > 0 ? (
		<ResponsiveContainer className="sm:hidden" height={500}>
			<AreaChart data={data}>
				<defs>
					<linearGradient id="area-chart-gradient" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
						<stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
					</linearGradient>
				</defs>
				<CartesianGrid strokeDasharray="3 3" vertical={true} />
				<XAxis
					dataKey="time"
					axisLine={false}
					tickLine={false}
					interval={365}
					stroke="#555555"
					tickSize={5}
					tick={{
						fontSize: 12,
						fontWeight: "bold",
						fill: "#555555",
						textAnchor: "middle",
					}}
				/>
				<YAxis
					axisLine={false}
					tickLine={false}
					stroke="#555555"
					tickSize={5}
					tick={{
						fontSize: 12,
						fontWeight: "bold",
						fill: "#555555",
						textAnchor: "end",
					}}
				/>
				<Tooltip content={<CustomTooltip />} offset="80" />

				<Area
					type="monotone"
					dataKey="temperature_2m"
					stroke="#8884d8"
					fillOpacity={1}
					fill="url(#area-chart-gradient)"
				/>
				<Brush
					dataKey="time"
					height={30}
					stroke="#8884d8"
					travellerWidth={10}
					startIndex={data.length - 3652}
					tickFormatter={() => ""}
				/>
			</AreaChart>
		</ResponsiveContainer>
	) : (
		<Loader />
	);
};

export default LineChart;
