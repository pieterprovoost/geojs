var cross = function(o, a, b) {
   return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
};

var sign = function(x) {
	return typeof x === "number" ? x ? x < 0 ? -1 : 1 : x === x ? 0 : NaN : NaN;
};

var rad = function(deg) {
	return deg * Math.PI / 180;
};

var fromRad = function(rad) {
	return rad * 180 / Math.PI;
};

var cartesian = function(point) {
	var x = r * Math.cos(rad(point[1])) * Math.cos(rad(point[0]));
	var y = r * Math.cos(rad(point[1])) * Math.sin(rad(point[0]));
	var z = r * Math.sin(rad(point[1]));
	return [x, y, z];
};

var fromCartesian = function(point) {
	var lon = Math.atan2(point[1], point[0]);
	var hyp = Math.sqrt(point[0] * point[0] + point[1] * point[1]);
	var lat = Math.atan2(point[2], hyp);
	return [lon, lat];
};

var r = 6371000;

module.exports = {
	cartesian: cartesian,
	fromCartesian: fromCartesian,
	cross: cross,
	sign: sign,
	rad: rad,
	fromRad: fromRad,
	r: r
};