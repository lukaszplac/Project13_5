function convertToMin(timeInSec) {
	return (timeInSec / 60).toFixed(0) + "min";
}

function conmvertToHours(timeInSec) {
	return (timeInSec / 3600).toFixed() + "h";
}

exports.convertToMin = convertToMin;
exports.convertToHours = conmvertToHours;