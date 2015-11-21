var util = require("./util");

var distance = function(points) {
	var lon1 = util.rad(points[0][0]);
	var lat1 = util.rad(points[0][1]);
	var lon2 = util.rad(points[1][0]);
	var lat2 = util.rad(points[1][1]);
	var dlat = lat2 - lat1;
	var dlon = lon2 - lon1;
	var a = Math.sin(dlat / 2) * Math.sin(dlat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) * Math.sin(dlon / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = util.r * c;
	return d;
};

var maxDistance = function(point, points) {
	var max = 0;
	for (p in points) {
		var d = distance([point, points[p]]);
		if (d > max) {
			max = d;
		}
	}
	return max;
};

module.exports = {
	distance: distance,
	maxDistance: maxDistance
};