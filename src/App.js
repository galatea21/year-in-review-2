import "./styles.css";
import React, { useEffect } from "react";
import BubbleHeatMap from "./charts/bubbleHeatMap";
import YearData from "./utils/dataClasses";
import Pie1 from "./charts/pie1";
import Pie2 from "./charts/pie2";
import Pie3 from "./charts/chart3";
import Pie4 from "./charts/chart4";
import Column from "./charts/column";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import LineChart from "./charts/line";

function App() {
	return (
		<div className="flex-container">
			<LineChart />
			{/* <div id="intro-chart"></div> */}
			{/* <div className="pie-container">
				<Pie1 chartID="pie-one" />
				<Pie2 chartID="pie-two" />
			</div>

			<Pie3 chartID="line" id="3" />
			<Pie4 chartID="column" id="4" />
			<Column chartID="column-two" id="2" />
			<BubbleHeatMap chartID="average-weekly-2021" /> */}
		</div>
	);
}

export default App;
