import React, { useLayoutEffect } from "react";

import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

//chart type
import * as am5percent from "@amcharts/amcharts5/percent";

function Pie(props) {
	const chartID = props.chartID;

	useLayoutEffect(() => {
		var root = am5.Root.new(chartID);

		// Set themes
		// https://www.amcharts.com/docs/v5/concepts/themes/
		root.setThemes([am5themes_Animated.new(root)]);

		// Create chart
		// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
		var chart = root.container.children.push(
			am5percent.PieChart.new(root, {
				endAngle: 270,
			})
		);

		// Create series
		// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
		var series = chart.series.push(
			am5percent.PieSeries.new(root, {
				valueField: "value",
				categoryField: "category",
				endAngle: 270,
			})
		);

		series.states.create("hidden", {
			endAngle: -90,
		});

		//dataset
		let data = [
			{
				category: "Q1",
				value: 501.9,
			},
			{
				category: "Q2",
				value: 301.9,
			},
			{
				category: "Q3",
				value: 201.1,
			},
			{
				category: "Q4",
				value: 165.8,
			},
		];

		// Set data
		// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
		series.data.setAll(data);

		series.appear(1000, 100);
	}, [chartID]);

	return <div id={chartID}></div>;
}
export default Pie;
