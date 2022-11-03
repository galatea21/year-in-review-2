/* Imports */
import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import YearData from "../utils/dataClasses";
am4core.useTheme(am4themes_animated);

function Pie2(props) {
	/* Chart code */
	const chart = useRef(null);
	const chartID = props.chartID;

	useLayoutEffect(() => {
		let chart = am4core.create(chartID, am4charts.PieChart);

		chart.paddingRight = 20;
		let b = new YearData("states2022_filtered");

		chart.data = [
			{
				period: "Q1",
				percentage: b.getRuntimeByQuarter(1),
			},
			{
				period: "Q2",
				percentage: b.getRuntimeByQuarter(2),
			},
			{
				period: "Q3",
				percentage: b.getRuntimeByQuarter(3),
			},
			{
				period: "Q4",
				percentage: b.getRuntimeByQuarter(4),
			},
		];

		// Add and configure Series
		let pieSeries = chart.series.push(new am4charts.PieSeries());
		pieSeries.dataFields.value = "percentage";
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

export default Pie2;
