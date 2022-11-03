import React, {  useLayoutEffect } from 'react';
import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function Column(props) {
    const chartID = props.chartID;
    useLayoutEffect(() => {
        let chart = am4core.create(chartID, am4charts.XYChart);
        chart.hiddenState.properties.opacity = 0;

// Set data
chart.data = [{
  "country": "United States",
  "value": 2025
}, {
  "country": "China",
  "value": 1882
}, {
  "country": "Japan",
  "value": 1809
}, {
  "country": "Germany",
  "value": 1322
}, {
  "country": "United Kingdom",
  "value": 1122
}, {
  "country": "France",
  "value": 1114
}, {
  "country": "India",
  "value": 984
}, {
  "country": "Spain",
  "value": 711
}, {
  "country": "Netherlands",
  "value": 665
}, {
  "country": "Russia",
  "value": 580
}, {
  "country": "South Korea",
  "value": 443
}, {
  "country": "Canada",
  "value": 441
}];

let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.fontSize = 11;
categoryAxis.renderer.labels.template.dy = 5;



let image = new am4core.Image();
image.horizontalCenter = "middle";
image.width = 20;
image.height = 20;
image.verticalCenter = "middle";
image.adapter.add("href", (href, target)=>{
	let category = target.dataItem.category;
	if(category){
		return "https://www.amcharts.com/wp-content/uploads/flags/" + category.split(" ").join("-").toLowerCase() + ".svg";
	}
	return href;
})
categoryAxis.dataItems.template.bullet = image;



let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.renderer.minGridDistance = 30;
valueAxis.renderer.baseGrid.disabled = true;


let series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "country";
series.dataFields.valueY = "value";
series.columns.template.tooltipText = "{valueY.value}";
series.columns.template.tooltipY = 0;
series.columns.template.strokeOpacity = 0;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
series.columns.template.adapter.add("fill", function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
});
        return () => {
			chart.dispose();
		};
    }, [chartID]);
  
    return (
      <div id={chartID}></div>
    );
  }
export default Column;