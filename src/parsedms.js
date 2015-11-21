var util = require("./util");

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
			dd = util.sign(d) * dd;
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

module.exports = {
	parseDms: parseDms
};