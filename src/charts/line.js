import "../styles.css";
import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

function LineChart() {
	useEffect(() => {
		function showCurve() {
			lineSeries.interpolationEasing = am4core.ease.elasticOut;
			lineSeries.dataItems.getIndex(3).setValue("valueY", 80, 2000);
			setTimeout(hideCurve, 2000);
		}

		function hideCurve() {
			lineSeries.interpolationEasing = am4core.ease.elasticOut;
			lineSeries.dataItems.getIndex(3).setValue("valueY", 30, 2000);
			setTimeout(showCurve, 2000);
		}

		var mainContainer = am4core.create("intro-chart", am4core.Container);
		mainContainer.width = am4core.percent(100);
		mainContainer.height = am4core.percent(100);

		var lineChart = mainContainer.createChild(am4charts.XYChart);
		lineChart.padding(0, 0, 0, 0);
		lineChart.seriesContainer.zIndex = -1;

		var data = [];
		var date = new Date(2000, 0, 1, 0, 0, 0, 0);

		for (var i = 0; i < 7; i++) {
			var newDate = new Date(date.getTime());
			newDate.setDate(i + 1);

			data.push({ date: newDate, value: 30 });
		}

		lineChart.data = data;

		var dateAxis = lineChart.xAxes.push(new am4charts.DateAxis());
		dateAxis.renderer.ticks.template.disabled = true;
		dateAxis.renderer.axisFills.template.disabled = true;

		dateAxis.renderer.labels.template.disabled = true;
		dateAxis.renderer.grid.template.disabled = true;

		dateAxis.renderer.inside = true;
		dateAxis.startLocation = 0.5;
		dateAxis.endLocation = 0.5;
		dateAxis.renderer.baseGrid.disabled = true;
		dateAxis.tooltip.disabled = true;
		dateAxis.renderer.line.disabled = true;
		dateAxis.renderer.minLabelPosition = 0.05;

		var valueAxis = lineChart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.tooltip.disabled = true;
		valueAxis.renderer.ticks.template.disabled = true;
		valueAxis.renderer.axisFills.template.disabled = true;
		valueAxis.renderer.minLabelPosition = 0.05;
		valueAxis.renderer.labels.template.disabled = true;
		valueAxis.renderer.grid.template.disabled = true;
		valueAxis.renderer.inside = true;
		valueAxis.min = 0;
		valueAxis.max = 100;
		valueAxis.strictMinMax = true;
		valueAxis.tooltip.disabled = true;
		valueAxis.renderer.line.disabled = true;
		valueAxis.renderer.baseGrid.disabled = true;

		var lineSeries = lineChart.series.push(new am4charts.LineSeries());
		lineSeries.dataFields.dateX = "date";
		lineSeries.dataFields.valueY = "value";
		lineSeries.sequencedInterpolation = true;
		lineSeries.fillOpacity = 0.3;
		lineSeries.strokeOpacity = 0;
		lineSeries.tensionX = 0.75;
		lineSeries.fill = am4core.color("#222a3f");
		lineSeries.fillOpacity = 1;

		lineSeries.events.on("shown", function () {
			setTimeout(showCurve, 2000);
		});
	});

	return (
		<div className="flex-container">
			<div id="intro-chart"></div>
		</div>
	);
}

export default LineChart;
