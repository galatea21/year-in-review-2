/* Imports */
import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function Pie1(props) {
	/* Chart code */
	const chart = useRef(null);
	const chartID = props.chartID;

	useLayoutEffect(() => {
		let chart = am4core.create(chartID, am4charts.PieChart);

		chart.paddingRight = 20;

		chart.data = [
			{
				period: "Q1",
				workingHours: 501.9,
			},
			{
				period: "Q2",
				workingHours: 301.9,
			},
			{
				period: "Q3",
				workingHours: 201.1,
			},
			{
				period: "Q4",
				workingHours: 50.8,
			},
		];

		// Add and configure Series
		let pieSeries = chart.series.push(new am4charts.PieSeries());
		pieSeries.dataFields.value = "workingHours";
		pieSeries.dataFields.category = "period";
		pieSeries.slices.template.stroke = am4core.color("#fff");
		pieSeries.slices.template.strokeOpacity = 1;

		// This creates initial animation
		pieSeries.hiddenState.properties.opacity = 1;
		pieSeries.hiddenState.properties.endAngle = -90;
		pieSeries.hiddenState.properties.startAngle = -90;

		chart.hiddenState.properties.radius = am4core.percent(0);

		return () => {
			chart.dispose();
		};
	}, []);

	return <div id={chartID} style={{ width: "100%", height: "500px" }}></div>;
}

export default Pie1;