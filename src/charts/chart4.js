import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import React, { useLayoutEffect } from 'react';
import YearData from "../utils/dataClasses";

am4core.useTheme(am4themes_animated);

function Pie4 (props) {
  const chartID = props.chartID;
  useLayoutEffect(() => {
    let chart = am4core.create(chartID, am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();
        
        // Set data
        // chart.data = [{
        //   "Day": "Monday",
        //   "value": 12
        // }, {
        //   "Day": "Tuesday",
        //   "value": 16
        // }, {
        //   "Day": "Wednesday",
        //   "value": 20
        // }, {
        //   "Day": "Thursday",
        //   "value": 14
        // }, {
        //   "Day": "Friday",
        //   "value": 11
        // }, {
        //   "Day": "Saturday",
        //   "value": 17
        // }, {
        //   "Day": "Sunday",
        //   "value": 13
        // }];
        let a = new YearData("states2021_filtered");

        chart.data = [
            {
            "Day": "Monday",
            "value": a.getRuntimeByWeekday(0)
        }, {
          "Day": "Tuesday",
          "value": a.getRuntimeByWeekday(1)
        }, {
          "Day": "Wednesday",
          "value": a.getRuntimeByWeekday(2)
        }, {
          "Day": "Thursday",
          "value": a.getRuntimeByWeekday(3)
        }, {
          "Day": "Friday",
          "value": a.getRuntimeByWeekday(4)
        }, {
          "Day": "Saturday",
          "value": a.getRuntimeByWeekday(5)
        }, {
          "Day": "Sunday",
          "value": a.getRuntimeByWeekday(6)
        }]

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "Day";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.verticalCenter = "middle";
        categoryAxis.renderer.labels.template.rotation = 270;
        categoryAxis.tooltip.disabled = true;
        categoryAxis.renderer.minHeight = 110;
        categoryAxis.renderer.Width = 100;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.minWidth = 30;

// Create series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.sequencedInterpolation = true;
        series.dataFields.valueY = "value";
        series.dataFields.categoryX = "Day";
        series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
        series.columns.template.strokeWidth = 0;

        series.tooltip.pointerOrientation = "vertical";

        series.columns.template.column.cornerRadiusTopLeft = 10;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.fillOpacity = 0.8;

// on hover, make corner radiuses bigger
        let hoverState = series.columns.template.column.states.create("hover");
        hoverState.properties.cornerRadiusTopLeft = 0;
        hoverState.properties.cornerRadiusTopRight = 0;
        hoverState.properties.fillOpacity = 1;

        series.columns.template.adapter.add("fill", function(fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
        });

// Cursor
    chart.cursor = new am4charts.XYCursor();
    return () => {
			chart.dispose();
		};
    },[chartID]);

    return (
      <div id={chartID}></div>
    );
}
export default Pie4;