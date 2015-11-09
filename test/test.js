var test = require("tape");
var fuzzy = require("test-fuzzy-array")
var geo = require("../src/geo.js");

test('parseDms', function(t) {
	var almostEqual = fuzzy(t, 0.0001);
    almostEqual(geo.parseDms("51°28'38''N -101°16′56″ w"), [-101.2822, 51.4772])
    t.end();
})
