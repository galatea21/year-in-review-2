// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import * as am5 from "@amcharts/amcharts5";
// import * as am5xy from "@amcharts/amcharts5/xy";
// import React, { useLayoutEffect } from 'react';
// import './App.css';

// function Pie3 (props) {
//   const chartID = props.chartID;
//   useLayoutEffect(() => {

//         let root = am5.Root.new(chartID);

//         root.setThemes([
//           am5themes_Animated.new(root)
//         ]);
        
//         root.dateFormatter.setAll({
//           dateFormat: "yyyy",
//           dateFields: ["valueX"]
//         });
        
//         let data = [{
//           "date": "2021-07-27",
//           "value": 13
//         }, {
//           "date": "2021-07-28",
//           "value": 11
//         }, {
//           "date": "2021-07-29",
//           "value": 15
//         }, {
//           "date": "2021-07-30",
//           "value": 16
//         }, {
//           "date": "2021-07-31",
//           "value": 18
//         }, {
//           "date": "2021-08-01",
//           "value": 13
//         }, {
//           "date": "2021-08-02",
//           "value": 22
//         }, {
//           "date": "2021-08-03",
//           "value": 23
//         }, {
//           "date": "2021-08-04",
//           "value": 20
//         }, {
//           "date": "2021-08-05",
//           "value": 17
//         }, {
//           "date": "2021-08-06",
//           "value": 16
//         }, {
//           "date": "2021-08-07",
//           "value": 18
//         }, {
//           "date": "2021-08-08",
//           "value": 21
//         }, {
//           "date": "2021-08-09",
//           "value": 26
//         }, {
//           "date": "2021-08-10",
//           "value": 24
//         }, {
//           "date": "2021-08-11",
//           "value": 29
//         }, {
//           "date": "2021-08-12",
//           "value": 32
//         }, {
//           "date": "2021-08-13",
//           "value": 18
//         }, {
//           "date": "2021-08-14",
//           "value": 24
//         }, {
//           "date": "2021-08-15",
//           "value": 22
//         }, {
//           "date": "2021-08-16",
//           "value": 18
//         }, {
//           "date": "2021-08-17",
//           "value": 19
//         }, {
//           "date": "2021-08-18",
//           "value": 14
//         }, {
//           "date": "2021-08-19",
//           "value": 15
//         }, {
//           "date": "2021-08-20",
//           "value": 12
//         }, {
//           "date": "2021-08-21",
//           "value": 8
//         }, {
//           "date": "2021-08-22",
//           "value": 9
//         }, {
//           "date": "2021-08-23",
//           "value": 8
//         }, {
//           "date": "2021-08-24",
//           "value": 7
//         }, {
//           "date": "2021-08-25",
//           "value": 5
//         }, {
//           "date": "2021-08-26",
//           "value": 11
//         }, {
//           "date": "2021-08-27",
//           "value": 13
//         }, {
//           "date": "2021-08-28",
//           "value": 18
//         }, {
//           "date": "2021-08-29",
//           "value": 20
//         }, {
//           "date": "2021-08-30",
//           "value": 29
//         }, {
//           "date": "2021-08-31",
//           "value": 33
//         }, {
//           "date": "2021-09-01",
//           "value": 42
//         }, {
//           "date": "2021-09-02",
//           "value": 35
//         }, {
//           "date": "2021-09-03",
//           "value": 31
//         }, {
//           "date": "2021-09-04",
//           "value": 47
//         }, {
//           "date": "2021-09-05",
//           "value": 52
//         }, {
//           "date": "2021-09-06",
//           "value": 46
//         }, {
//           "date": "2021-09-07",
//           "value": 41
//         }, {
//           "date": "2021-09-08",
//           "value": 43
//         }, {
//           "date": "2021-09-09",
//           "value": 40
//         }, {
//           "date": "2021-09-10",
//           "value": 39
//         }, {
//           "date": "2021-09-11",
//           "value": 34
//         }, {
//           "date": "2021-09-12",
//           "value": 29
//         }, {
//           "date": "2021-09-13",
//           "value": 34
//         }, {
//           "date": "2021-09-14",
//           "value": 37
//         }, {
//           "date": "2021-09-15",
//           "value": 42
//         }, {
//           "date": "2021-09-16",
//           "value": 49
//         }, {
//           "date": "2021-09-17",
//           "value": 46
//         }, {
//           "date": "2021-09-18",
//           "value": 47
//         }, {
//           "date": "2021-09-19",
//           "value": 55
//         }, {
//           "date": "2021-09-20",
//           "value": 59
//         }, {
//           "date": "2021-09-21",
//           "value": 58
//         }, {
//           "date": "2021-09-22",
//           "value": 57
//         }, {
//           "date": "2021-09-23",
//           "value": 61
//         }, {
//           "date": "2021-09-24",
//           "value": 59
//         }, {
//           "date": "2021-09-25",
//           "value": 67
//         }, {
//           "date": "2021-09-26",
//           "value": 65
//         }, {
//           "date": "2021-09-27",
//           "value": 61
//         }, {
//           "date": "2021-09-28",
//           "value": 66
//         }, {
//           "date": "2021-09-29",
//           "value": 69
//         }, {
//           "date": "2021-09-30",
//           "value": 71
//         }, {
//           "date": "2021-10-01",
//           "value": 67
//         }, {
//           "date": "2021-10-02",
//           "value": 63
//         }, {
//           "date": "2021-10-03",
//           "value": 46
//         }, {
//           "date": "2021-10-04",
//           "value": 32
//         }, {
//           "date": "2021-10-05",
//           "value": 21
//         }, {
//           "date": "2021-10-06",
//           "value": 18
//         }, {
//           "date": "2021-10-07",
//           "value": 21
//         }, {
//           "date": "2021-10-08",
//           "value": 28
//         }, {
//           "date": "2021-10-09",
//           "value": 27
//         }, {
//           "date": "2021-10-10",
//           "value": 36
//         }, {
//           "date": "2021-10-11",
//           "value": 33
//         }, {
//           "date": "2021-10-12",
//           "value": 31
//         }, {
//           "date": "2021-10-13",
//           "value": 30
//         }, {
//           "date": "2021-10-14",
//           "value": 34
//         }, {
//           "date": "2021-10-15",
//           "value": 38
//         }, {
//           "date": "2021-10-16",
//           "value": 37
//         }, {
//           "date": "2021-10-17",
//           "value": 44
//         }, {
//           "date": "2021-10-18",
//           "value": 49
//         }, {
//           "date": "2021-10-19",
//           "value": 53
//         }, {
//           "date": "2021-10-20",
//           "value": 57
//         }, {
//           "date": "2021-10-21",
//           "value": 60
//         }, {
//           "date": "2021-10-22",
//           "value": 61
//         }, {
//           "date": "2021-10-23",
//           "value": 69
//         }, {
//           "date": "2021-10-24",
//           "value": 67
//         }, {
//           "date": "2021-10-25",
//           "value": 72
//         }, {
//           "date": "2021-10-26",
//           "value": 77
//         }, {
//           "date": "2021-10-27",
//           "value": 75
//         }, {
//           "date": "2021-10-28",
//           "value": 70
//         }, {
//           "date": "2021-10-29",
//           "value": 72
//         }, {
//           "date": "2021-10-30",
//           "value": 70
//         }, {
//           "date": "2021-10-31",
//           "value": 72
//         }, {
//           "date": "2021-11-01",
//           "value": 73
//         }, {
//           "date": "2021-11-02",
//           "value": 67
//         }, {
//           "date": "2021-11-03",
//           "value": 68
//         }, {
//           "date": "2021-11-04",
//           "value": 65
//         }, {
//           "date": "2021-11-05",
//           "value": 71
//         }, {
//           "date": "2021-11-06",
//           "value": 75
//         }, {
//           "date": "2021-11-07",
//           "value": 74
//         }, {
//           "date": "2021-11-08",
//           "value": 71
//         }, {
//           "date": "2021-11-09",
//           "value": 76
//         }, {
//           "date": "2021-11-10",
//           "value": 77
//         }, {
//           "date": "2021-11-11",
//           "value": 81
//         }, {
//           "date": "2021-11-12",
//           "value": 83
//         }, {
//           "date": "2021-11-13",
//           "value": 80
//         }, {
//           "date": "2021-11-14",
//           "value": 81
//         }, {
//           "date": "2021-11-15",
//           "value": 87
//         }, {
//           "date": "2021-11-16",
//           "value": 82
//         }, {
//           "date": "2021-11-17",
//           "value": 86
//         }, {
//           "date": "2021-11-18",
//           "value": 80
//         }, {
//           "date": "2021-11-19",
//           "value": 87
//         }, {
//           "date": "2021-11-20",
//           "value": 83
//         }, {
//           "date": "2021-11-21",
//           "value": 85
//         }, {
//           "date": "2021-11-22",
//           "value": 84
//         }, {
//           "date": "2021-11-23",
//           "value": 82
//         }, {
//           "date": "2021-11-24",
//           "value": 73
//         }, {
//           "date": "2021-11-25",
//           "value": 71
//         }, {
//           "date": "2021-11-26",
//           "value": 75
//         }, {
//           "date": "2021-11-27",
//           "value": 79
//         }, {
//           "date": "2021-11-28",
//           "value": 70
//         }, {
//           "date": "2021-11-29",
//           "value": 73
//         }, {
//           "date": "2021-11-30",
//           "value": 61
//         }, {
//           "date": "2021-12-01",
//           "value": 62
//         }, {
//           "date": "2021-12-02",
//           "value": 66
//         }, {
//           "date": "2021-12-03",
//           "value": 65
//         }, {
//           "date": "2021-12-04",
//           "value": 73
//         }, {
//           "date": "2021-12-05",
//           "value": 79
//         }, {
//           "date": "2021-12-06",
//           "value": 78
//         }, {
//           "date": "2021-12-07",
//           "value": 78
//         }, {
//           "date": "2021-12-08",
//           "value": 78
//         }, {
//           "date": "2021-12-09",
//           "value": 74
//         }, {
//           "date": "2021-12-10",
//           "value": 73
//         }, {
//           "date": "2021-12-11",
//           "value": 75
//         }, {
//           "date": "2021-12-12",
//           "value": 70
//         }, {
//           "date": "2021-12-13",
//           "value": 77
//         }, {
//           "date": "2021-12-14",
//           "value": 67
//         }, {
//           "date": "2021-12-15",
//           "value": 62
//         }, {
//           "date": "2021-12-16",
//           "value": 64
//         }, {
//           "date": "2021-12-17",
//           "value": 61
//         }, {
//           "date": "2021-12-18",
//           "value": 59
//         }, {
//           "date": "2021-12-19",
//           "value": 53
//         }, {
//           "date": "2021-12-20",
//           "value": 54
//         }, {
//           "date": "2021-12-21",
//           "value": 56
//         }, {
//           "date": "2021-12-22",
//           "value": 59
//         }, {
//           "date": "2021-12-23",
//           "value": 58
//         }, {
//           "date": "2021-12-24",
//           "value": 55
//         }, {
//           "date": "2021-12-25",
//           "value": 52
//         }, {
//           "date": "2021-12-26",
//           "value": 54
//         }, {
//           "date": "2021-12-27",
//           "value": 50
//         }, {
//           "date": "2021-12-28",
//           "value": 50
//         }, {
//           "date": "2021-12-29",
//           "value": 51
//         }, {
//           "date": "2021-12-30",
//           "value": 52
//         }, {
//           "date": "2021-12-31",
//           "value": 58
//         }, {
//           "date": "2022-01-01",
//           "value": 60
//         }, {
//           "date": "2022-01-02",
//           "value": 67
//         }, {
//           "date": "2022-01-03",
//           "value": 64
//         }, {
//           "date": "2022-01-04",
//           "value": 66
//         }, {
//           "date": "2022-01-05",
//           "value": 60
//         }, {
//           "date": "2022-01-06",
//           "value": 63
//         }, {
//           "date": "2022-01-07",
//           "value": 61
//         }, {
//           "date": "2022-01-08",
//           "value": 60
//         }, {
//           "date": "2022-01-09",
//           "value": 65
//         }, {
//           "date": "2022-01-10",
//           "value": 75
//         }, {
//           "date": "2022-01-11",
//           "value": 77
//         }, {
//           "date": "2022-01-12",
//           "value": 78
//         }, {
//           "date": "2022-01-13",
//           "value": 70
//         }, {
//           "date": "2022-01-14",
//           "value": 70
//         }, {
//           "date": "2022-01-15",
//           "value": 73
//         }, {
//           "date": "2022-01-16",
//           "value": 71
//         }, {
//           "date": "2022-01-17",
//           "value": 74
//         }, {
//           "date": "2022-01-18",
//           "value": 78
//         }, {
//           "date": "2022-01-19",
//           "value": 85
//         }, {
//           "date": "2022-01-20",
//           "value": 82
//         }, {
//           "date": "2022-01-21",
//           "value": 83
//         }, {
//           "date": "2022-01-22",
//           "value": 88
//         }, {
//           "date": "2022-01-23",
//           "value": 85
//         }, {
//           "date": "2022-01-24",
//           "value": 85
//         }, {
//           "date": "2022-01-25",
//           "value": 80
//         }, {
//           "date": "2022-01-26",
//           "value": 87
//         }, {
//           "date": "2022-01-27",
//           "value": 84
//         }, {
//           "date": "2022-01-28",
//           "value": 83
//         }, {
//           "date": "2022-01-29",
//           "value": 84
//         }, {
//           "date": "2022-01-30",
//           "value": 81
//         }];

//         let chart = root.container.children.push(am5xy.XYChart.new(root, {
//           focusable: true,
//           panX: true,
//           panY: true,
//           wheelX: "panX",
//           wheelY: "zoomX",
//           pinchZoomX:true
//         }));
        
//         let easing = am5.ease.linear;

//         let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
//           maxDeviation: 0.1,
//           groupData: false,
//           baseInterval: {
//             timeUnit: "day",
//             count: 1
//           },
//           renderer: am5xy.AxisRendererX.new(root, {
        
//           }),
//           tooltip: am5.Tooltip.new(root, {})
//         }));
        
//         let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
//           maxDeviation: 0.2,
//           renderer: am5xy.AxisRendererY.new(root, {})
//         }));

//         let series = chart.series.push(am5xy.LineSeries.new(root, {
//           minBulletDistance: 10,
//           connect: false,
//           xAxis: xAxis,
//           yAxis: yAxis,
//           valueYField: "value",
//           valueXField: "date",
//           tooltip: am5.Tooltip.new(root, {
//             pointerOrientation: "horizontal",
//             labelText: "{valueY}"
//           })
//         }));
        
//         series.fills.template.setAll({
//           fillOpacity: 0.2,
//           visible: true
//         });
        
//         series.strokes.template.setAll({
//           strokeWidth: 2
//         });
        

//         series.data.processor = am5.DataProcessor.new(root, {
//           dateFormat: "yyyy-MM-dd",
//           dateFields: ["date"]
//         });
        
//         series.data.setAll(data);
        
//         series.bullets.push(function() {
//           let circle = am5.Circle.new(root, {
//             radius: 4,
//             fill: root.interfaceColors.get("background"),
//             stroke: series.get("fill"),
//             strokeWidth: 2
//           })
        
//           return am5.Bullet.new(root, {
//             sprite: circle
//           })
//         });
        

//         let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
//           xAxis: xAxis,
//           behavior: "none"
//         }));
//         cursor.lineY.set("visible", false);
        
//         // add scrollbar
//         chart.set("scrollbarX", am5.Scrollbar.new(root, {
//           orientation: "horizontal"
//         }));
        

//         chart.appear(1000, 100);
//         root.current = root;
//     }, [chartID]);
//     return (
//       <div id={chartID}></div>
//     );
//   }

// export default Pie3;