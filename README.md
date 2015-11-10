# geojs

Geospatial functions

## Run tests

Requires `tape` and `test-fuzzy-array`. 

```bash
node test/*.js
```

## Browserify

```bash
browserify src/geo.js --s geo > geo.js
```

## Functions
### parseDms()

```javascript
geo.parseDms("51°28'38''N 101°16'56''W")
geo.parseDms("51°28'38\"N 101°16'56\"W")
geo.parseDms("51°28`38''N 101°16′56″W")
geo.parseDms("51° 28' 38'' N 101° 16' 56'' W")
geo.parseDms("51 ° 28 ' 38 '' N 101 ° 16 ' 56 '' W")
geo.parseDms("51°28'38''N -101°16'56''E")
geo.parseDms("51° N 101° W")
geo.parseDms("51° N")
geo.parseDms("12° N 109° 58’ 37” W")
```

```
[-101.2822, 51.4772]
[-101.2822, 51.4772]
[-101.2822, 51.4772]
[-101.2822, 51.4772]
[-101.2822, 51.4772]
[-101.2822, 51.4772]
[-101.0000, 51.0000]
[null, 51.0000]
[-109.9769, 12.0000]
```
