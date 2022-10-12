import data2021 from "../data/states2021_filtered.json";
import data2022 from "../data/states2022_filtered.json";

let processedData2021 = [],
	processedData2022 = [];

let processData = () => {
	for (let i = 0; i < data2021.length; i++) {
		let item = data2021[i];
		processedData2021.push({
			startTime: new Date(item["Start time"]),
			state: item["State"],
		});
	}

	for (let i = 0; i < data2022.length; i++) {
		let item = data2022[i];
		processedData2022.push({
			startTime: new Date(item["Start time"]),
			state: item["State"],
		});
	}
};

export { processData, processedData2021, processedData2022 };
