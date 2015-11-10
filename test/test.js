var test = require("tape");
var fuzzy = require("test-fuzzy-array")
var geo = require("../src/geo.js");

test('parseDms', function(t) {
	var almostEqual = fuzzy(t, 0.0001);

    almostEqual(geo.parseDms("51°28'38''N 101°16'56''W"), [-101.2822, 51.4772])
    almostEqual(geo.parseDms("51°28'38\"N 101°16'56\"W"), [-101.2822, 51.4772])
    almostEqual(geo.parseDms("51°28`38''N 101°16′56″W"), [-101.2822, 51.4772])
    almostEqual(geo.parseDms("51° 28' 38'' N 101° 16' 56'' W"), [-101.2822, 51.4772])
    almostEqual(geo.parseDms("51 ° 28 ' 38 '' N 101 ° 16 ' 56 '' W"), [-101.2822, 51.4772])
    almostEqual(geo.parseDms("51°28'38''N -101°16'56''E"), [-101.2822, 51.4772])
    almostEqual(geo.parseDms("51° N 101° W"), [-101.0000, 51.0000])
    almostEqual(geo.parseDms("51° N"), [null, 51.0000])

    t.end();
})
