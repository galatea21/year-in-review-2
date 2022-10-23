import "./styles.css";
import React from "react";
// import Gauge from "./charts/gauge";
import BubbleHeatMap from "./charts/bubbleHeatMap";
// import YearData from "./utils/dataClasses";
import Pie1 from "./charts/pie1";
import Pie2 from "./charts/pie2";
// import Pie3 from "./charts/chart3";
// import Pie4 from "./charts/chart4";
// import Piecompare from "./charts/piecompare";
// import Column from "./charts/column";

import {
	processData,
	processedData2021,
	processedData2022,
} from "./utils/dataHandlers";

function App() {
	// processData();
	// const x = new YearData(processedData2021, processedData2022);
	return (
		<div className="flex-container">
			<div className="pie-container">
				<Pie1 chartID="pie-one" />
				<Pie2 chartID="pie-two" />
			</div>
			{/*
			<Pie3 chartID="line" id="3" />
			<Pie4 chartID="column" id="4" />
			<Column chartID="column-two" id="2" />
			
			<Gauge chartID="gauge" /> */}
			<BubbleHeatMap chartID="average-weekly-2021" />
		</div>
	);
}

export default App;
