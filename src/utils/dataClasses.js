function addHours(numOfHours, date = new Date()) {
	date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

	return date;
}

// Return difference between 2 Dates in minutes
function dateDiff(first, second) {
	return Math.round((second - first) / (1000 * 60));
}

function getHourOnly(date) {
	date.setHours(date.getHours());
	date.setMinutes(0, 0, 0); // Resets also seconds and milliseconds

	return date;
}

function getNextHour(date) {
	return addHours(1, getHourOnly(date));
}

class HourData {
	constructor(startTime, workingTime) {
		this.startTime = startTime.toString();
		this.hour = startTime.getHours();
		this.weekday = startTime.getDay();
		this.month = startTime.getMonth() + 1;
		this.quarter = Math.ceil(this.month / 3);
		this.workingPercent = workingTime / 60;
	}
}

class YearData {
	constructor(filename) {
		let jsonData = this.parseDataFromJson(filename);

		this.data = [];

		for (let i = 0; i < jsonData.length; i++) {
			if (jsonData[i]["state"] != "Working") continue;
			if (i == jsonData.length - 1) {
				// TODO
			} else {
				let startTime = jsonData[i]["startTime"];
				let endTime = jsonData[i + 1]["startTime"];
				while (startTime < endTime) {
					let nextHour = getNextHour(startTime);
					nextHour = endTime < nextHour ? endTime : nextHour;
					let timeWorking = dateDiff(nextHour, startTime);
					this.data.push(
						new HourData(getHourOnly(startTime), timeWorking)
					);
					startTime = nextHour;
				}
			}
		}
	}

	parseDataFromJson(filename) {
		const jsonFile = require("../data/" + filename + ".json");
		const jsonData = [];

		for (let i = 0; i < jsonFile.length; i++) {
			let item = jsonFile[i];
			jsonData.push({
				startTime: new Date(item["Start time"]),
				state: item["State"],
			});
		}

		return jsonData;
	}

	getTotalRuntime() {
		let total = 0;
		this.data.forEach((item) => (total += item.workingPercent * 60));

		return total;
	}

	getRuntimeByMonth(month) {
		let total = 0;
		this.data
			.filter((item) => item.month == month)
			.forEach((item) => (total += item.workingPercent * 60));

		return total;
	}

	getRuntimeByWeekday(day) {
		let total = 0;
		this.data
			.filter((item) => item.weekday == day)
			.forEach((item) => (total += item.workingPercent * 60));

		return total;
	}

	getRuntimeByHour(hour) {
		let total = 0;
		this.data
			.filter((item) => item.hour == hour)
			.forEach((item) => (total += item.workingPercent * 60));

		return total;
	}

	getRuntimeByQuarter(quarter) {
		let total = 0;
		this.data
			.filter((item) => item.quarter == quarter)
			.forEach((item) => (total += item.workingPercent * 60));

		return total;
	}
}

export default YearData;
