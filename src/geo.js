var sign = function(x) {
	return typeof x === 'number' ? x ? x < 0 ? -1 : 1 : x === x ? 0 : NaN : NaN;
};

var parseDms = function(input) {
	var result = [null, null];
	var re = /(-?\d+(?:\.\d+)?)\s*°\s*(?:(\d+(?:\.\d+)?)\s*[´`'ʹʻʼ′’]\s*(?:(\d+(?:\.\d+)?)\s*(?:″|ʺ|"|”|´´|``|''|ʹʹ|ʻʻ|ʼʼ|′′|’’)?)?)?\s*([NSEW])?/gi;
	var match = re.exec(input);
	while (match != null) {
		var d = parseFloat(match[1]);
		var m = parseFloat(match[2]);
		var s = parseFloat(match[3]);
		var h = match[4];
		if (!isNaN(d)) {
			var dd = Math.abs(d);
			if (!isNaN(m)) {
				dd = dd + m / 60.0;
				if (!isNaN(s)) {
					dd = dd + s / 3600.0;	
				} 
			}
			dd = sign(d) * dd;
			if (h .toLowerCase() == "n") {
				result[1] = dd;
			} else if (h .toLowerCase() == "e") {
				result[0] = dd;
			} else if (h .toLowerCase() == "s") {
				result[1] = -dd;
			} else if (h .toLowerCase() == "w") {
				result[0] = -dd;
			}			
		}
		match = re.exec(input);
	}
	return result;
};	

var cross = function cross(o, a, b) {
	return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
};

var convexHull = function(points) {
	points.sort(function(a, b) {
		return a[0] == b[0] ? a[1] - b[1] : a[0] - b[0];
	});
	var lower = [];
	for (var i = 0; i < points.length; i++) {
		while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], points[i]) <= 0) {
			lower.pop();
		}
		lower.push(points[i]);
	}
	var upper = [];
	for (var i = points.length - 1; i >= 0; i--) {
		while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], points[i]) <= 0) {
			upper.pop();
		}
		upper.push(points[i]);
	}
	upper.pop();
	lower.pop();
	return lower.concat(upper);
};

module.exports = {
	parseDms: parseDms,
	convexHull: convexHull
};