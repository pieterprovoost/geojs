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
    almostEqual(geo.parseDms("12° N 109° 58’ 37” W"), [-109.9769, 12.0000])
    t.end();
})

test('convexHull', function(t) {
    var points = [[30, 20], [45, 40], [10, 40], [30, 20], [15, 5], [40, 10], [10, 20], [5, 10], [15, 5]];
    var hull = geo.convexHull(points);
    t.equal(hull.length, 5)
    t.end();
});

test('distance', function(t) {
    var almostEqual = fuzzy(t, 1000);
    var points = [[20, 30], [21, 31]];
    var d = geo.distance(points);
    almostEqual([d], [147000]);
    t.end();
});

test('midpoint', function(t) {
    var almostEqual = fuzzy(t, 0.1);
    var points = [[-179, 10], [-179, 20], [179, 15]];
    var mid = geo.midpoint(points);
    almostEqual(mid, [-179.67, 15]);
    t.end();
});

