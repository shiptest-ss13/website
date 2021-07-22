var mapElements = document.body.getElementsByClassName("mapbox")

for (i = 0; i < mapElements.length; i++) {
	var base = L.tileLayer("https://shiptest.ga/new-renders/initial/padded/tiles/" + mapElements[i].id + "/tiles/{z}/tile_{x}-{y}.png", {
		minZoom: 1,
		maxZoom: 6,
		minNativeZoom: 2,
		maxNativeZoom: 3,
		continuousWorld: true,
		tms: false
	})

	var areas = L.tileLayer("https://shiptest.ga/new-renders/areas/padded/tiles/" + mapElements[i].id + "/tiles/{z}/tile_{x}-{y}.png", {
		minZoom: 1,
		maxZoom: 6,
		minNativeZoom: 2,
		maxNativeZoom: 3,
		continuousWorld: true,
		tms: false
	})

	var pipenet = L.tileLayer("https://shiptest.ga/new-renders/pipenet/padded/tiles/" + mapElements[i].id + "/tiles/{z}/tile_{x}-{y}.png", {
		minZoom: 1,
		maxZoom: 6,
		minNativeZoom: 2,
		maxNativeZoom: 3,
		continuousWorld: true,
		tms: false
	})

	var powernet  = L.tileLayer("https://shiptest.ga/new-renders/powernet/padded/tiles/" + mapElements[i].id + "/tiles/{z}/tile_{x}-{y}.png", {
		minZoom: 1,
		maxZoom: 6,
		minNativeZoom: 2,
		maxNativeZoom: 3,
		continuousWorld: true,
		tms: false
	})

	var map = L.map(mapElements[i].id, {
		attributionControl: false,
		minZoom: 1,
		maxBounds: [
			[64, -64],
			[-512, 512]
		],
		maxBoundsViscosity: 1.0,
		maxZoom: 6,
		crs: L.CRS.Simple,
		preferCanvas: true,
		layers: [base]
	}).setView([-64, 64], 3);


	var baseMaps = {
		"Ship": base,
		"Areas": areas,
	}

	var overlayMaps = {
		"Pipes": pipenet,
		"Cables": powernet,
	}


	L.control.layers(baseMaps, overlayMaps).addTo(map)

}


