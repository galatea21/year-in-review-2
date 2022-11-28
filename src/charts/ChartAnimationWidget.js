import "../styles.css";
import YearData from "../utils/dataClasses";
import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_amchartsdark from "@amcharts/amcharts4/themes/dark";

function ChartAnimationWidget() {
	useEffect(() => {
		am4core.useTheme(am4themes_animated);
		am4core.useTheme(am4themes_amchartsdark);

		let dataClass = new YearData("states2021_filtered");

		let radarChart,
			lineSeries,
			lineChart,
			radarSeries,
			mainContainer,
			headerLabel;

		// Start setting up main container and the chart for background
		setTimeout(initCharts, 500);

		function initCharts() {
			// Main container of every charts
			mainContainer = am4core.create(" intro-chart", am4core.Container);
			mainContainer.width = am4core.percent(100);
			mainContainer.height = am4core.percent(100);
			mainContainer.preloader.disabled = true;

			// Customize header label
			headerLabel = mainContainer.createChild(am4core.TextLink);
			headerLabel.fill = am4core.color("#ffffff");

			headerLabel.fontSize = 20;
			headerLabel.horizontalCenter = "middle";
			headerLabel.verticalCenter = "middle";
			headerLabel.x = am4core.percent(50);
			headerLabel.y = 70;
			headerLabel.showOnInit = true;
			headerLabel.zIndex = 1300;
			headerLabel.hiddenState.properties.dy = -150;
			headerLabel.hiddenState.transitionDuration = 700;
			headerLabel.defaultState.transitionDuration = 800;

			// Area chart on initial screen (the one which bends around quarter chart)
			lineChart = mainContainer.createChild(am4charts.XYChart);
			lineChart.padding(0, 0, 0, 0);

			// Make line chart only a straight line and hide axises
			let data = [];
			let date = new Date();

			for (let i = 0; i < 5; i++) {
				let newDate = new Date(date.getTime());
				newDate.setDate(i + 1);
				data.push({ date: newDate, value: 32 });
			}

			lineChart.data = data;

			let dateAxis = lineChart.xAxes.push(new am4charts.DateAxis());
			dateAxis.renderer.grid.template.location = 0;
			dateAxis.renderer.labels.template.disabled = true;
			dateAxis.renderer.inside = true;
			dateAxis.renderer.grid.template.disabled = true;
			dateAxis.startLocation = 0.5;
			dateAxis.endLocation = 0.5;
			dateAxis.renderer.baseGrid.disabled = true;
			dateAxis.renderer.line.disabled = true;

			let valueAxis = lineChart.yAxes.push(new am4charts.ValueAxis());
			valueAxis.tooltip.disabled = true;
			valueAxis.renderer.labels.template.disabled = true;
			valueAxis.renderer.inside = true;
			valueAxis.renderer.grid.template.disabled = true;
			valueAxis.min = 0;
			valueAxis.max = 100;
			valueAxis.strictMinMax = true;
			valueAxis.renderer.line.disabled = true;
			valueAxis.renderer.baseGrid.disabled = true;

			lineSeries = lineChart.series.push(new am4charts.LineSeries());
			lineSeries.dataFields.dateX = "date";
			lineSeries.dataFields.valueY = "value";
			lineSeries.sequencedInterpolation = true;
			lineSeries.strokeOpacity = 0;
			lineSeries.tensionX = 0.75;
			lineSeries.fill = am4core.color("#222a3f");
			lineSeries.fillOpacity = 1;
			lineSeries.hidden = true;

			// Start animating
			lineSeries.events.on("inited", startAnimation);
		}

		function startAnimation() {
			// Show label
			headerLabel.hide(0);
			headerLabel.text = "Year-in Review";
			headerLabel.interactionsEnabled = false;
			headerLabel.show();

			// Show the background line chart
			lineChart.visible = true;
			lineSeries.defaultState.transitionDuration = 1000;
			lineSeries.hide(0);
			let animation = lineSeries.show();

			animation.events.on("animationended", function () {
				setTimeout(showQuarterChart, 500);
			});
		}

		function showQuarterChart() {
			// Create and set data for the quarter chart as a radar chart
			radarChart = mainContainer.createChild(am4charts.RadarChart);

			radarChart.data = [
				{
					category: dataClass.getRuntimeByQuarter(0),
					value: dataClass.getRuntimeByQuarter(0),
					quarter: "Q1",
				},
				{
					category: dataClass.getRuntimeByQuarter(1),
					value: dataClass.getRuntimeByQuarter(1),
					quarter: "Q2",
				},
				{
					category: dataClass.getRuntimeByQuarter(2),
					value: dataClass.getRuntimeByQuarter(2),
					quarter: "Q3",
				},
				{
					category: dataClass.getRuntimeByQuarter(3),
					value: dataClass.getRuntimeByQuarter(3),
					quarter: "Q4",
				},
			];

			radarChart.padding(10, 10, 10, 10);
			radarChart.zIndex = 40;
			radarChart.radius = am4core.percent(100);
			radarChart.zoomOutButton.disabled = true;
			radarChart.width = 400;
			radarChart.height = 300;
			radarChart.x = am4core.percent(50);
			radarChart.y = am4core.percent(50);
			radarChart.horizontalCenter = "middle";
			radarChart.verticalCenter = "middle";

			radarChart.startAngle = 90;
			radarChart.endAngle = 450;

			radarChart.innerRadius = am4core.percent(40);

			let categoryAxis = radarChart.xAxes.push(
				new am4charts.CategoryAxis()
			);
			categoryAxis.dataFields.category = "category";
			categoryAxis.renderer.minGridDistance = 10;
			categoryAxis.renderer.grid.template.location = 0;
			categoryAxis.renderer.labels.template.location = 0.5;
			// categoryAxis.renderer.labels.template.disabled = true;

			let valueAxis = radarChart.yAxes.push(new am4charts.ValueAxis());
			valueAxis.renderer.minGridDistance = 10;
			valueAxis.renderer.grid.template.strokeOpacity = 0;
			valueAxis.renderer.labels.template.disabled = true;
			valueAxis.renderer.axisAngle = radarChart.startAngle;
			valueAxis.min = 0;
			valueAxis.max = 500000;
			valueAxis.strictMinMax = true;

			radarSeries = radarChart.series.push(
				new am4charts.RadarColumnSeries()
			);
			radarSeries.columns.template.width = am4core.percent(80);
			radarSeries.dataFields.categoryX = "category";
			radarSeries.dataFields.valueY = "value";
			radarSeries.columns.template.radarColumn.cornerRadius = 4;
			radarSeries.columns.template.radarColumn.innerCornerRadius = 0;
			radarSeries.tooltipText = "{valueY.value}";
			radarSeries.columns.template.strokeOpacity = 0;
			radarSeries.defaultState.transitionDuration = 500;
			radarSeries.sequencedInterpolation = true;

			let labelBullet = radarSeries.bullets.push(
				new am4charts.LabelBullet()
			);
			labelBullet.label.verticalCenter = "bottom";
			labelBullet.label.dy = 5;
			labelBullet.label.text = "{quarter}";

			radarSeries.columns.template.adapter.add(
				"fill",
				function (fill, target) {
					if (target.dataItem) {
						return radarChart.colors.getIndex(
							12 - target.dataItem.index
						);
					}
				}
			);

			// Attempt to aniamte the radar chart into a bar chart
			radarChart.events.on("ready", () => {
				let animation = radarChart
					.animate(
						[
							{ property: "startAngle", to: 269.9 },
							{ property: "endAngle", to: 270.1 },
						],
						1500,
						am4core.ease.cubicIn
					)
					.delay(5000);
				animation.events.on("animationended", showMonthlyChart);
			});

			radarSeries.hide(0);

			// Change duration and easing
			// Bend bg line chart to wrap around radar chart
			lineSeries.interpolationDuration = 3000;
			lineSeries.interpolationEasing = am4core.ease.elasticOut;
			lineSeries.dataItems.getIndex(2).setValue("valueY", 80, 3500);
		}

		function showMonthlyChart() {
			// Set the lower half of bg to cover whole screen
			lineSeries.dataItems.getIndex(0).setValue("valueY", 100, 3500);
			lineSeries.dataItems.getIndex(1).setValue("valueY", 100, 3500);
			lineSeries.dataItems.getIndex(2).setValue("valueY", 100, 3500);
			lineSeries.dataItems.getIndex(3).setValue("valueY", 100, 3500);
			lineSeries.dataItems.getIndex(4).setValue("valueY", 100, 3500);

			let valueAxis = radarChart.yAxes.push(new am4charts.ValueAxis());
			valueAxis.max = 300000;

			radarChart.data = [
				{
					category: dataClass.getRuntimeByMonth(0),
					value: dataClass.getRuntimeByMonth(0),
				},
				{
					category: dataClass.getRuntimeByMonth(1),
					value: dataClass.getRuntimeByMonth(1),
				},
				{
					category: dataClass.getRuntimeByMonth(2),
					value: dataClass.getRuntimeByMonth(2),
				},
				{
					category: dataClass.getRuntimeByMonth(3),
					value: dataClass.getRuntimeByMonth(3),
				},
				{
					category: dataClass.getRuntimeByMonth(4),
					value: dataClass.getRuntimeByMonth(4),
				},
				{
					category: dataClass.getRuntimeByMonth(5),
					value: dataClass.getRuntimeByMonth(5),
				},
				{
					category: dataClass.getRuntimeByMonth(6),
					value: dataClass.getRuntimeByMonth(6),
				},
				{
					category: dataClass.getRuntimeByMonth(7),
					value: dataClass.getRuntimeByMonth(7),
				},
				{
					category: dataClass.getRuntimeByMonth(8),
					value: dataClass.getRuntimeByMonth(8),
				},
				{
					category: dataClass.getRuntimeByMonth(9),
					value: dataClass.getRuntimeByMonth(9),
				},
				{
					category: dataClass.getRuntimeByMonth(10),
					value: dataClass.getRuntimeByMonth(10),
				},
				{
					category: dataClass.getRuntimeByMonth(11),
					value: dataClass.getRuntimeByMonth(11),
				},
			];

			radarChart
				.animate(
					[{ property: "width", to: 1200 }],
					500,
					am4core.ease.linear
				)
				.delay(100);

			setTimeout(showWeeklyChart, 5000);
		}

		function showWeeklyChart() {
			radarChart.animate(
				[{ property: "width", to: 700 }],
				500,
				am4core.ease.linear
			);

			radarChart.data = [
				{
					category: dataClass.getRuntimeByWeekday(0),
					value: dataClass.getRuntimeByWeekday(0),
				},
				{
					category: dataClass.getRuntimeByWeekday(1),
					value: dataClass.getRuntimeByWeekday(1),
				},
				{
					category: dataClass.getRuntimeByWeekday(2),
					value: dataClass.getRuntimeByWeekday(2),
				},
				{
					category: dataClass.getRuntimeByWeekday(3),
					value: dataClass.getRuntimeByWeekday(3),
				},
				{
					category: dataClass.getRuntimeByWeekday(4),
					value: dataClass.getRuntimeByWeekday(4),
				},
				{
					category: dataClass.getRuntimeByWeekday(5),
					value: dataClass.getRuntimeByWeekday(5),
				},
				{
					category: dataClass.getRuntimeByWeekday(6),
					value: dataClass.getRuntimeByWeekday(6),
				},
			];
		}
	});

	return (
		<div className="flex-container">
			<div id=" intro-chart"></div>
		</div>
	);
}

export default ChartAnimationWidget;
