var util = require("./util")

var convexHull = function(points) {
	points.sort(function(a, b) {
		return a[0] == b[0] ? a[1] - b[1] : a[0] - b[0];
	});
	var lower = [];
	for (var i = 0; i < points.length; i++) {
		while (lower.length >= 2 && util.cross(lower[lower.length - 2], lower[lower.length - 1], points[i]) <= 0) {
			lower.pop();
		}
		lower.push(points[i]);
	}
	var upper = [];
	for (var i = points.length - 1; i >= 0; i--) {
		while (upper.length >= 2 && util.cross(upper[upper.length - 2], upper[upper.length - 1], points[i]) <= 0) {
			upper.pop();
		}
		upper.push(points[i]);
	}
	upper.pop();
	lower.pop();
	return lower.concat(upper);
};

module.exports = {
	convexHull: convexHull
};