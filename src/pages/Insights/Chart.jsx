import React from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, PolarRadiusAxis, PolarGrid, Customized, PolarAngleAxis, LabelList } from "recharts";

const Chart = ({data}) => {
	const style = {
		top: "50%",
		right: 0,
		transform: "translate(0, -50%)",
		lineHeight: "24px",
	};

	return (
		<ResponsiveContainer width="100%" height="100%">
			<RadialBarChart cx="50%" cy="50%" innerRadius="45%" outerRadius="100%" barSize={25} data={data} startAngle={-90}>
				<RadialBar
					minAngle={215}
					label={{ position: "insideStart", fill: "#000" }}
					background
					clockWise={true}
					dataKey="value"
					fill={"#8883df"}
				/>
				<Legend iconSize={60} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
				<Tooltip />
			</RadialBarChart>
		</ResponsiveContainer>
	);
};

export default Chart;
