import React, { useLayoutEffect } from 'react';
import './App.css';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";


function Pie2(props) {
  const chartID = props.chartID;
  useLayoutEffect(() => {
    let root = am5.Root.new(chartID);

root.setThemes([
  am5themes_Animated.new(root)
]);


let chart = root.container.children.push(am5percent.PieChart.new(root, {
  layout: root.verticalLayout
}));

let series = chart.series.push(am5percent.PieSeries.new(root, {
  valueField: "value",
  categoryField: "category"
}));

series.data.setAll([
  { value: 23, category: "First Quarter" },
  { value: 19, category: "Second Quarter" },
  { value: 25, category: "Third Quarter" },
  { value: 33, category: "Last Quarter" },

]);

series.appear(1000, 100);

    root.current = root;

  }, [chartID]);

  return (
    <div id={chartID} style={{ width: "943.5px", height: "500px"}}></div>
  );
}

export default Pie2;