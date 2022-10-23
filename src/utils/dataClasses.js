const States = {
	Null: -1,
	Working: 0,
	Idle: 1,
	Failure: 2,
};

function addHours(numOfHours, date = new Date()) {
	date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

	return date;
}

// Return difference between 2 Dates in minutes
function dateDiff(first, second) {
	return Math.round((second - first) / (1000 * 60));
}

class HourData {
	constructor(startTime, state) {
		this.startTime = startTime;
		this.weekday = startTime.getDay();
		this.month = startTime.getMonth();
		this.state = state;
	}
}

class HourData2 {
	constructor(startTime, workingTime) {
		this.startTime = startTime;
		this.weekday = startTime.getDay();
		this.month = startTime.getMonth();
		this.quarter = Math.floor(this.month / 4);
		this.workingPercent = workingTime / 60;
	}
}

class YearData {
	// constructor(data2021, data2022) {
	// 	this._2021 = [];
	// 	this._2022 = [];
	// 	let c = 0;
	// 	let currHour2021 = new Date("31 December 2020 23:00");
	// 	// set 2021 data (8760 hours total)
	// 	for (let i = 0; i < 8760; i++) {
	// 		currHour2021 = addHours(1, currHour2021);
	// 		let currEvent = data2021[c]["startTime"];
	// 		let nextEvent = data2021[c + 1]["startTime"];
	// 		if (currHour2021 < currEvent) {
	// 			this._2021.push(new HourData(currHour2021, States.Null));
	// 			continue;
	// 		}
	// 		if (currHour2021 > currEvent && currHour2021 >= nextEvent) {
	// 			c++;
	// 			currEvent = data2021[c]["startTime"];
	// 			nextEvent = data2021[c + 1]["startTime"];
	// 		}
	// 		if (currHour2021 >= currEvent) {
	// 			this._2021.push(
	// 				new HourData(currHour2021, data2021[c]["state"])
	// 			);
	// 			continue;
	// 		}
	// 		// if (currHour2021 >)
	// 	}
	// }

	constructor(yearData) {
		this.yearData = [];

		for (let i = 0; i < yearData.length; i++) {
			if (yearData[i]["state"] != "Working") continue;
			if (i == yearData.length - 1) {
				// TODO
			} else {
				let startTime = yearData[i]["startTime"];
				let endTime = yearData[i + 1]["startTime"];
				while (startTime < endTime) {
					let nextHour = addHours(1, startTime);
					nextHour = nextHour > endTime ? endTime : nextHour;
					let timeWorking = dateDiff(startTime, nextHour);
					this.yearData.push(HourData2(startTime, timeWorking));
					startTime = nextHour;
				}
			}
		}
	}
}

export default YearData;
