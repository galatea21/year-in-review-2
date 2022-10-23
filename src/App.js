import "./styles.css";
import React from "react";
import Gauge from "./charts/gauge";
import BubbleHeatMap from "./charts/bubbleHeatMap";
import YearData from "./utils/dataClasses";
import Pie from "./charts/chart";
import Pie2 from "./charts/chart2";
import Pie3 from "./charts/chart3";
import Pie4 from "./charts/chart4";
import Piecompare from "./charts/piecompare";
import Column from "./charts/column";

import {
	processData,
	processedData2021,
	processedData2022,
} from "./utils/dataHandlers";

function App() {
	processData();
	// const x = new YearData(processedData2021, processedData2022);
	return (
		<div className="flex-container">
			<div className="pie-container">
				<Pie chartID="pie-one" id="1" />
				<Pie2 chartID="pie-two" id="2" />
			</div>
			<Piecompare chartID="pie-compare" id="compare" />
			<Pie3 chartID="line" id="3" />
			<Pie4 chartID="column" id="4" />
			<Column chartID="column-two" id="2" />
			<BubbleHeatMap chartID="average-weekly-2021" />
			<Gauge chartID="gauge" />
		</div>
	);
}
export default App;
