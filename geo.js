(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.geo = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var sign = function(x) {
	return typeof x === 'number' ? x ? x < 0 ? -1 : 1 : x === x ? 0 : NaN : NaN;
};

var parseDms = function(input) {
	var result = [null, null];
	var re = /(-?\d+(?:\.\d+)?)\s*°\s*(?:(\d+(?:\.\d+)?)\s*[´`'ʹʻʼ′]\s*(?:(\d+(?:\.\d+)?)\s*(?:″|ʺ|"|´´|``|''|ʹʹ|ʻʻ|ʼʼ|′′)?)?)?\s*([NSEW])?/gi;
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

module.exports = {
	parseDms: parseDms
};
},{}]},{},[1])(1)
});