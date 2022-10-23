// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import React, { useRef, useLayoutEffect } from 'react';
// import './App.css';
// import * as am5 from "@amcharts/amcharts5";
// import * as am5xy from "@amcharts/amcharts5/xy";

// function Column(props) {
//     const chartID = props.chartID;
//     useLayoutEffect(() => {
//       var root = am5.Root.new(chartID);

// // Set themes
// // https://www.amcharts.com/docs/v5/concepts/themes/
// root.setThemes([
//   am5themes_Animated.new(root)
// ]);

// // Create chart
// // https://www.amcharts.com/docs/v5/charts/xy-chart/
// let chart = root.container.children.push(
//   am5xy.XYChart.new(root, {
//     panX: true,
//     panY: true,
//     wheelX: "panX",
//     wheelY: "zoomX"
//   })
// );

// // Add cursor
// // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
// let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
// cursor.lineY.set("visible", false);

// // Create axes
// // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
// let xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });

// let xAxis = chart.xAxes.push(
//   am5xy.CategoryAxis.new(root, {
//     maxDeviation: 0.3,
//     categoryField: "country",
//     renderer: xRenderer,
//     tooltip: am5.Tooltip.new(root, {})
//   })
// );

// let yAxis = chart.yAxes.push(
//   am5xy.ValueAxis.new(root, {
//     maxDeviation: 0.3,
//     renderer: am5xy.AxisRendererY.new(root, {})
//   })
// );

// // Create series
// // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
// let series = chart.series.push(
//   am5xy.ColumnSeries.new(root, {
//     name: "Series 1",
//     xAxis: xAxis,
//     yAxis: yAxis,
//     valueYField: "value",
//     sequencedInterpolation: true,
//     categoryXField: "country"
//   })
// );

// series.columns.template.setAll({
//   width: am5.percent(120),
//   fillOpacity: 0.9,
//   strokeOpacity: 0
// });
// series.columns.template.adapters.add("fill", (fill, target) => {
//   return chart.get("colors").getIndex(series.columns.indexOf(target));
// });

// series.columns.template.adapters.add("stroke", (stroke, target) => {
//   return chart.get("colors").getIndex(series.columns.indexOf(target));
// });

// series.columns.template.set("draw", function (display, target) {
//   let w = target.getPrivate("width", 0);
//   let h = target.getPrivate("height", 0);
//   display.moveTo(0, h);
//   display.bezierCurveTo(w / 4, h, w / 4, 0, w / 2, 0);
//   display.bezierCurveTo(w - w / 4, 0, w - w / 4, h, w, h);
// });

// // Set data
// let data = [{
//   country: "USA",
//   value: 2025
// }, {
//   country: "China",
//   value: 1882
// }, {
//   country: "Japan",
//   value: 1809
// }, {
//   country: "Germany",
//   value: 1322
// }, {
//   country: "UK",
//   value: 1122
// }, {
//   country: "France",
//   value: 1114
// }, {
//   country: "India",
//   value: 984
// }, {
//   country: "Spain",
//   value: 711
// }, {
//   country: "Netherlands",
//   value: 665
// }, {
//   country: "Russia",
//   value: 580
// }, {
//   country: "South Korea",
//   value: 443
// }, {
//   country: "Canada",
//   value: 441
// }];

// xAxis.data.setAll(data);
// series.data.setAll(data);

// // Make stuff animate on load
// // https://www.amcharts.com/docs/v5/concepts/animations/
// series.appear(1000);
// chart.appear(1000, 100);
  
//       root.current = root;
  
//     }, [chartID]);
  
//     return (
//       <div id={chartID}></div>
//     );
//   }
// export default Column;