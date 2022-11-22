import "../styles.css";
import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_amchartsdark from "@amcharts/amcharts4/themes/dark";

function LineChart() {
	useEffect(() => {
		am4core.useTheme(am4themes_animated);
		am4core.useTheme(am4themes_amchartsdark);

		var piechart,
			lineSeries,
			lineChart,
			valueAxis,
			pieSeries,
			mainContainer,
			headerLabel,
			footerLabel,
			nextButton;

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

			nextButton = mainContainer.createChild(am4core.Button);
			nextButton.horizontalCenter = "middle";
			nextButton.verticalCenter = "middle";
			nextButton.padding(0, 0, 0, 0);
			nextButton.background.cornerRadius(25, 25, 25, 25);
			nextButton.y = headerLabel.y;
			nextButton.dy = 1;
			nextButton.height = 40;
			nextButton.width = 40;
			nextButton.horizontalCenter = "middle";
			nextButton.verticalCenter = "middle";
			nextButton.zIndex = 5000;
			nextButton.icon = triangle2;
			nextButton.hide(0);
			// nextButton.events.on("hit", repeat);

			footerLabel = mainContainer.createChild(am4core.Label);
			footerLabel.x = am4core.percent(50);
			footerLabel.y = am4core.percent(90);
			footerLabel.fontSize = 16;
			footerLabel.fill = am4core.color("#ffffff");
			footerLabel.verticalCenter = "middle";
			footerLabel.horizontalCenter = "middle";
			footerLabel.fillOpacity = 0.5;
			footerLabel.fontSize = 12;
			footerLabel.hide(0);

			// area chart on initial screen (the one which bends around pie chart)
			lineChart = mainContainer.createChild(am4charts.XYChart);
			lineChart.padding(0, 0, 0, 0);

			var data = [];
			var date = new Date(2000, 0, 1, 0, 0, 0, 0);

			for (var i = 0; i < 7; i++) {
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
			if (!piechart) {
				piechart = mainContainer.createChild(am4charts.PieChart);
				piechart.zindex = 15;
				piechart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
				piechart.width = 400;
				piechart.x = am4core.percent(50);
				piechart.horizontalCenter = "middle";
				piechart.hiddenState.properties.opacity = 0;
				piechart.defaultState.transitionDuration = 3500;
				piechart.defaultState.transitionEasing =
					am4core.ease.elasticOut;

				piechart.data = [
					{
						answer: "[bold]No[/b]",
						value: 400,
						fontColor: am4core.color("#222a3f"),
					},
					{ answer: "It's impossible!", value: 200, radius: 10 },
					{
						answer: "What does bend mean?",
						value: 40,
						disabled: true,
					},
					{
						answer: "Yes, I use amCharts 4",
						value: 30,
						disabled: true,
					},
				];

				pieSeries = piechart.series.push(new am4charts.PieSeries());
				pieSeries.dataFields.value = "value";
				pieSeries.dataFields.category = "answer";
				piechart.innerRadius = 75;
				piechart.radius = 150;
				// this makes initial animation
				pieSeries.hiddenState.properties.opacity = 0;
				pieSeries.slices.template.cornerRadius = 7;
				pieSeries.defaultState.transitionDuration = 2000;
				pieSeries.hiddenState.transitionEasing = am4core.ease.sinOut;
				pieSeries.labels.template.fillOpacity = 0.8;
				pieSeries.labels.template.text = "{category}";
				pieSeries.alignLabels = false;
				pieSeries.labels.template.radius = -53;
				pieSeries.labels.template.propertyFields.disabled = "disabled";
				pieSeries.labels.template.propertyFields.fill = "fontColor";
				pieSeries.labels.template.propertyFields.radius = "radius";
				pieSeries.ticks.template.disabled = true;
				//this makes initial animation from bottom
				pieSeries.hiddenState.properties.dy = 400;
				pieSeries.defaultState.transitionEasing =
					am4core.ease.elasticOut;
				pieSeries.defaultState.transitionDuration = 3500;
			}

			headerLabel.y = 70;
			piechart.hide(0);
			piechart.show();
			pieSeries.hide(0);
			var animation = pieSeries.show();
			// animation.events.on("animationended", createMap);
			// change duration and easing
			lineSeries.interpolationDuration = 3000;
			lineSeries.interpolationEasing = am4core.ease.elasticOut;
			lineSeries.dataItems.getIndex(3).setValue("valueY", 80, 3500);
		}
	});

	return (
		<div className="flex-container">
			<div id=" intro-chart"></div>
		</div>
	);
}

export default LineChart;
