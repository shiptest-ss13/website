var mapElements = document.body.getElementsByClassName("mapbox")

for (i = 0; i < mapElements.length; i++) {
	var map = L.map(mapElements[i].id, {
		attributionControl: false,
		minZoom: 2,
		maxBounds: [
			[64, -64],
			[-256, 256]
		],
		maxBoundsViscosity: 1.0,
		maxZoom: 6,
		crs: L.CRS.Simple,
		preferCanvas: true,
	}).setView([-64, 64], 3);

	L.tileLayer("https://suckerberg.ga/renders/tiles/" + mapElements[i].id + "/tiles/{z}/tile_{x}-{y}.png", {
		minZoom: 2,
		maxZoom: 6,
		maxNativeZoom: 3,
		continuousWorld: true,
		tms: false
	}).addTo(map);

}


