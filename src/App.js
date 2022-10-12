import "./styles.css";
import React from "react";
import Pie from "./charts/pie";
import Gauge from "./charts/gauge";
import BubbleHeatMap from "./charts/bubbleHeatMap";
import YearData from "./utils/dataClasses";
import {
	processData,
	processedData2021,
	processedData2022,
} from "./utils/dataHandlers";

function App() {
	processData();
	const x = new YearData(processedData2021, processedData2022);
	return (
		<div className="flex-container">
			<Pie chartID="pie-one" />
			<BubbleHeatMap chartID="average-weekly-2021" />
			<Gauge chartID="gauge" />
		</div>
	);
}
export default App;
