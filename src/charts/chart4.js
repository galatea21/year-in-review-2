// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import * as am5 from "@amcharts/amcharts5";
// import * as am5xy from "@amcharts/amcharts5/xy";
// import React, { useLayoutEffect } from 'react';
// import './App.css';

// function Pie4 (props) {
//   const chartID = props.chartID;
//   useLayoutEffect(() => {
//         let root = am5.Root.new(chartID);
        
//         root.setThemes([
//           am5themes_Animated.new(root)
//         ]);
        
//         let chart = root.container.children.push(am5xy.XYChart.new(root, {
//           panX: true,
//           panY: true,
//           wheelX: "none",
//           wheelY: "none"
//         }));
        
//         // We don't want zoom-out button to appear while animating, so we hide it
//         chart.zoomOutButton.set("forceHidden", true);
        

//         // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
//         let xRenderer = am5xy.AxisRendererX.new(root, {
//           minGridDistance: 30
//         });
//         xRenderer.labels.template.setAll({
//           rotation: -90,
//           centerY: am5.p50,
//           centerX: 0,
//           paddingRight: 15
//         });
//         xRenderer.grid.template.set("visible", false);
        
//         let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
//           maxDeviation: 0,
//           categoryField: "Day",
//           renderer: xRenderer
//         }));
        
//         let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
//           min: 0,
//           maxDeviation:0,
//           renderer: am5xy.AxisRendererY.new(root, {})
//         }));
        
        
//         // Add series
//         // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
//         let series = chart.series.push(am5xy.ColumnSeries.new(root, {
//           name: "Series 1",
//           xAxis: xAxis,
//           yAxis: yAxis,
//           valueYField: "value",
//           categoryXField: "Day"
//         }));
        
//         // Rounded corners for columns
//         series.columns.template.setAll({
//           cornerRadiusTL: 5,
//           cornerRadiusTR: 5
//         });
        
//         // Make each column to be of a different color
//         series.columns.template.adapters.add("fill", function (fill, target) {
//           return chart.get("colors").getIndex(series.columns.indexOf(target ));
//         });
        
//         series.columns.template.adapters.add("stroke", function (stroke, target) {
//           return chart.get("colors").getIndex(series.columns.indexOf(target ));
//         });
        
//         // Add Label bullet
//         series.bullets.push(function () {
//           return am5.Bullet.new(root, {
//             locationY: 1,
//             sprite: am5.Label.new(root, {
//               text: "{valueYWorking.formatNumber('#.')}",
//               fill: root.interfaceColors.get("alternativeText"),
//               centerY: 0,
//               centerX: am5.p50,
//               populateText: true
//             })
//           });
//         });
        
        
//         // Set data
//         let data = [{
//           "Day": "Monday",
//           "value": 12
//         }, {
//           "Day": "Tuesday",
//           "value": 16
//         }, {
//           "Day": "Wednesday",
//           "value": 20
//         }, {
//           "Day": "Thursday",
//           "value": 14
//         }, {
//           "Day": "Friday",
//           "value": 11
//         }, {
//           "Day": "Saturday",
//           "value": 17
//         }, {
//           "Day": "Sunday",
//           "value": 13
//         }];
        
//         xAxis.data.setAll(data);
//         series.data.setAll(data);
        
//         // update data with random values each 1.5 sec
//         // setInterval(function () {
//         //   updateData();
//         // }, 1500)
        
//         function updateData() {
//           am5.array.each(series.dataItems, function (dataItem) {
//             let value = dataItem.get("valueY") + Math.round(Math.random() * 300 - 150);
//             if (value < 0) {
//               value = 10;
//             }
//             // both valueY and workingValueY should be changed, we only animate workingValueY
//             dataItem.set("valueY", value);
//             dataItem.animate({
//               key: "valueYWorking",
//               to: value,
//               duration: 600,
//               easing: am5.ease.out(am5.ease.cubic)
//             });
//           })
        
//           sortCategoryAxis();
//         }
        
//         // Get series item by category
//         function getSeriesItem(category) {
//           for (var i = 0; i < series.dataItems.length; i++) {
//             let dataItem = series.dataItems[i];
//             if (dataItem.get("categoryX") == category) {
//               return dataItem;
//             }
//           }
//         }
        
        
//         // Axis sorting
//         function sortCategoryAxis() {
        
//           // Sort by value
//           series.dataItems.sort(function (x, y) {
//             return y.get("valueY") - x.get("valueY"); // descending
//             //return y.get("valueY") - x.get("valueY"); // ascending
//           })
        
//           // Go through each axis item
//           am5.array.each(xAxis.dataItems, function (dataItem) {
//             // get corresponding series item
//             let seriesDataItem = getSeriesItem(dataItem.get("category"));
        
//             if (seriesDataItem) {
//               // get index of series data item
//               let index = series.dataItems.indexOf(seriesDataItem);
//               // calculate delta position
//               let deltaPosition = (index - dataItem.get("index", 0)) / series.dataItems.length;
//               // set index to be the same as series data item index
//               dataItem.set("index", index);
//               // set deltaPosition instanlty
//               dataItem.set("deltaPosition", -deltaPosition);
//               // animate delta position to 0
//               dataItem.animate({
//                 key: "deltaPosition",
//                 to: 0,
//                 duration: 1000,
//                 easing: am5.ease.out(am5.ease.cubic)
//               })
//             }
//           });
        
//           // Sort axis items by index.
//           // This changes the order instantly, but as deltaPosition is set,
//           // they keep in the same places and then animate to true positions.
//           xAxis.dataItems.sort(function (x, y) {
//             return x.get("index") - y.get("index");
//           });
//         }
        
//         series.appear(1000);
//         chart.appear(1000, 100);
//         root.current = root;
//     },[chartID]);
  
//     return (
//       <div id={chartID}></div>
//     );
// }
// export default Pie4;