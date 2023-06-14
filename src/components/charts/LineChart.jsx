import React from "react";
import {
	ResponsiveContainer,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	AreaChart,
	Brush,
	Area,
} from "recharts";
import moment from "moment";

const LineChart = ({ data, dataKey }) => {
	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			const { value, time } = payload[0].payload;
			const formattedTime = moment(time).format("YYYY-MM-DD, HH:mm");

			return (
				<div className="custom-tooltip bg-gray-400 p-2 rounded-xl">
					<p className="label">{value}</p>
					<p className="desc">{formattedTime}</p>
				</div>
			);
		}

		return null;
	};

	return data && data.length > 0 ? (
		<ResponsiveContainer height={500}>
			<AreaChart data={data}>
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
					tickFormatter={(value) => {
						const labels = value.slice(0, 10);
						return labels;
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
					padding={{ top: 40, bottom: 40 }}
				/>
				<Tooltip content={<CustomTooltip />} offset="80" />
				<Area
					type="monotone"
					dataKey={dataKey}
					stroke="#8884d8"
					fillOpacity={1}
					fill="url(#area-chart-gradient)"
				/>
				<Brush
					dataKey="time"
					height={30}
					stroke="#8884d8"
					travellerWidth={10}
					tickFormatter={() => ""}
				/>
			</AreaChart>
		</ResponsiveContainer>
	) : null;
};

export default LineChart;
