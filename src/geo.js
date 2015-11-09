var parseDms = function(input) {
	var result = [null, null];
	var re = /(\d+(?:\.\d+)?)[°º:d\s]?\s?(?:(\d+(?:\.\d+)?)['’‘′:]\s?(?:(\d{1,2}(?:\.\d+)?)(?:"|″|’’|'')?)?)?\s?([NSEW])?/gi;
	var match = re.exec(input);
	while (match != null) {
		var d = parseFloat(match[1]);
		var m = parseFloat(match[2]);
		var s = parseFloat(match[3]);
		var h = match[4];
		var dd = d + m / 60.0 + s / 3600.0;
		if (h .toLowerCase() == "n") {
			result[1] = dd;
		} else if (h .toLowerCase() == "e") {
			result[0] = dd;
		} else if (h .toLowerCase() == "s") {
			result[1] = -dd;
		} else if (h .toLowerCase() == "w") {
			result[0] = -dd;
		}
		match = re.exec(input);
	}
	return result;
};	

module.exports = {
	parseDms: parseDms
};