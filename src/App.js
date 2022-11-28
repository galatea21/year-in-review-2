import "./styles.css";
import React, { useEffect } from "react";
import ChartAnimationWidget from "./charts/ChartAnimationWidget";

function App() {
	return (
		<div className="flex-container">
			<ChartAnimationWidget />
		</div>
	);
}

export default App;
