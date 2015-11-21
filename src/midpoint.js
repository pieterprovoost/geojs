var util = require("./util");

var midpoint = function(points) {
	var sx = 0;
	var sy = 0;
	var sz = 0;
	for (p in points) {
		var cart = util.cartesian(points[p]);
		sx = sx + cart[0];
		sy = sy + cart[1];
		sz = sz + cart[2];
	}
	var mean = [sx / points.length, sy / points.length, sz / points.length];
	var mid = util.fromCartesian(mean);
	return [util.fromRad(mid[0]), util.fromRad(mid[1])];
};

module.exports = {
	midpoint: midpoint
};