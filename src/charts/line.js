import "../styles.css";
import YearData from "../utils/dataClasses";
import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_amchartsdark from "@amcharts/amcharts4/themes/dark";

function LineChart() {
	useEffect(() => {
		am4core.useTheme(am4themes_animated);
		am4core.useTheme(am4themes_amchartsdark);

		var radarChart,
			lineSeries,
			lineChart,
			valueAxis,
			radarSeries,
			mainContainer,
			headerLabel;

		setTimeout(init, 500);

		function init() {
			// Main container of everything
			mainContainer = am4core.create(" intro-chart", am4core.Container);
			mainContainer.width = am4core.percent(100);
			mainContainer.height = am4core.percent(100);
			mainContainer.preloader.disabled = true;

			// header label
			headerLabel = mainContainer.createChild(am4core.TextLink);
			headerLabel.fill = am4core.color("#ffffff");

			// when we hit title, we repeat animation

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

			var triangle2 = new am4core.Triangle();
			triangle2.width = 8;
			triangle2.height = 10;
			triangle2.fill = am4core.color("#ffffff");
			triangle2.direction = "right";
			triangle2.valign = "middle";
			triangle2.align = "center";
			triangle2.dx = 1;

			// area chart on initial screen (the one which bends around pie chart)
			lineChart = mainContainer.createChild(am4charts.XYChart);
			lineChart.padding(0, 0, 0, 0);

			var data = [];
			var date = new Date();

			for (var i = 0; i < 5; i++) {
				var newDate = new Date(date.getTime());
				newDate.setDate(i + 1);
				data.push({ date: newDate, value: 32 });
			}

			lineChart.data = data;

			var dateAxis = lineChart.xAxes.push(new am4charts.DateAxis());
			dateAxis.renderer.grid.template.location = 0;
			dateAxis.renderer.labels.template.disabled = true;
			dateAxis.renderer.inside = true;
			dateAxis.renderer.grid.template.disabled = true;
			dateAxis.startLocation = 0.5;
			dateAxis.endLocation = 0.5;
			dateAxis.renderer.baseGrid.disabled = true;
			dateAxis.renderer.line.disabled = true;

			valueAxis = lineChart.yAxes.push(new am4charts.ValueAxis());
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
			lineSeries.events.on("inited", startEverything);
		}

		function startEverything() {
			headerLabel.hide(0);
			headerLabel.text =
				"[font-size: 12 opacity: 0.5]amCharts presents the movie: [/]Will it bend?";
			headerLabel.interactionsEnabled = false;
			headerLabel.show();

			lineChart.visible = true;
			lineSeries.defaultState.transitionDuration = 1000;
			lineSeries.hide(0);
			var animation = lineSeries.show();

			animation.events.on("animationended", function () {
				setTimeout(stage0, 500);
			});
		}

		// where pie chart is created and animated from bottom to top, also where area's chart values are animated to bend around pie.
		function stage0() {
			radarChart = mainContainer.createChild(am4charts.RadarChart);

			let a = new YearData("states2021_filtered");

			radarChart.data = [
				{
					category: a.getRuntimeByQuarter(1),
					value: a.getRuntimeByQuarter(1),
				},
				{
					category:a.getRuntimeByQuarter(2),
					value: a.getRuntimeByQuarter(2),
				},
				{
					category: a.getRuntimeByQuarter(3),
					value: a.getRuntimeByQuarter(3),
				},
				{
					category: a.getRuntimeByQuarter(4),
					value: a.getRuntimeByQuarter(4),
				}
				// {
				// 	category: "So",
				// 	value: 10,
				// },
				// {
				// 	category: "can",
				// 	value: 20,
				// },
				// {
				// 	category: "your",
				// 	value: 30,
				// },
				// {
				// 	category: "charts",
				// 	value: 40,
				// },
				// {
				// 	category: "do",
				// 	value: 50,
				// },
				// {
				// 	category: "this?",
				// 	value: 60,
				// },
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

			var categoryAxis = radarChart.xAxes.push(
				new am4charts.CategoryAxis()
			);
			categoryAxis.dataFields.category = "category";
			categoryAxis.renderer.minGridDistance = 10;
			categoryAxis.renderer.grid.template.location = 0;
			categoryAxis.renderer.labels.template.location = 0.5;
			// categoryAxis.renderer.labels.template.disabled = true;

			var valueAxis = radarChart.yAxes.push(new am4charts.ValueAxis());
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
			radarSeries.columns.template.tooltipText = "{value}";
			radarSeries.dataFields.valueY = "value";
			radarSeries.columns.template.radarColumn.cornerRadius = 4;
			radarSeries.columns.template.radarColumn.innerCornerRadius = 0;
			radarSeries.columns.template.strokeOpacity = 0;
			radarSeries.defaultState.transitionDuration = 500;
			radarSeries.sequencedInterpolation = true;

			radarSeries.columns.template.adapter.add(
				"fill",
				function (fill, target) {
					if (target.dataItem) {
						return radarChart.colors.getIndex(
							5 - target.dataItem.index
						);
					}
				}
			);

			radarChart.events.on("ready", unbend);

			function bend() {
				var animation = radarChart
					.animate(
						[
							{ property: "startAngle", to: 90 },
							{ property: "endAngle", to: 450 },
						],
						3500,
						am4core.ease.cubicIn
					)
					.delay(1000);
				animation.events.on("animationended", unbend);
			}

			function unbend() {
				var animation = radarChart
					.animate(
						[
							{ property: "startAngle", to: 269.9 },
							{ property: "endAngle", to: 270.1 },
						],
						3500,
						am4core.ease.cubicIn
					)
					.delay(500);
				// animation.events.on("animationended", bend);
			}

			radarChart.hide(0);
			radarChart.show();
			radarSeries.hide(0);
			// var animation = pieSeries.show();
			// change duration and easing
			lineSeries.interpolationDuration = 3000;
			lineSeries.interpolationEasing = am4core.ease.elasticOut;
			lineSeries.dataItems.getIndex(2).setValue("valueY", 80, 3500);
		}
	});

	return (
		<div className="flex-container">
			<div id=" intro-chart"></div>
		</div>
	);
}

export default LineChart;
