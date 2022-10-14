import React, { useLayoutEffect } from 'react';
import './App.css';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function Piecompare(props) {
    const chartID = props.chartID;

    useLayoutEffect(() => {
      var root = am5.Root.new(chartID);
  
      root.setThemes([
        am5themes_Animated.new(root)
      ]);
      
      var chart = root.container.children.push(am5percent.PieChart.new(root, {
        layout: root.verticalLayout
      }));
      
      var series = chart.series.push(am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category"
      }));
      
      series.data.setAll([
      
        { value: 11.5, category: "First Quarter 2021" },
        { value: 9.5, category: "Second Quarter 2021" },
        { value: 12.5, category: "Third Quarter 2021" },
        { value: 16.5, category: "Last Quarter 2021" },
        { value: 8.5, category: "First Quarter 2022" },
        { value: 11, category: "Second Quarter 2022" },
        { value: 13, category: "Third Quarter 2022" },
        { value: 17.5, category: "Last Quarter 2022" },

      
      ]);
      
      series.appear(1000, 100);
      return () => {
        root.dispose();
      };
    }, [chartID]);
    return <div id={chartID}></div>;
  }

export default Piecompare;