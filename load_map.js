var params = {},
    pairs = document.URL.split('?')
            .pop()
            .split('&');

for (var i = 0, p; i < pairs.length; i++) {
        p = pairs[i].split('=');
        params[ p[0] ] =  p[1];
}

if(!("map" in params)) {
    window.location.replace("https://shiptest.net/maps");
}

var mapname = params["map"]
document.title = mapname;

var base = L.tileLayer("https://shiptest.net/renders/initial/padded/tiles/" + mapname + "/tiles/{z}/tile_{x}-{y}.png", {
    minZoom: 1,
    maxZoom: 6,
    minNativeZoom: 3,
    maxNativeZoom: 3,
    continuousWorld: true,
    tms: false
})

var areas = L.tileLayer("https://shiptest.net/renders/areas/padded/tiles/" + mapname + "/tiles/{z}/tile_{x}-{y}.png", {
    minZoom: 1,
    maxZoom: 6,
    minNativeZoom: 3,
    maxNativeZoom: 3,
    continuousWorld: true,
    tms: false
})

var pipenet = L.tileLayer("https://shiptest.net/renders/pipenet/padded/tiles/" + mapname + "/tiles/{z}/tile_{x}-{y}.png", {
    minZoom: 1,
    maxZoom: 6,
    minNativeZoom: 3,
    maxNativeZoom: 3,
    continuousWorld: true,
    tms: false
})

var powernet  = L.tileLayer("https://shiptest.net/renders/powernet/padded/tiles/" + mapname + "/tiles/{z}/tile_{x}-{y}.png", {
    minZoom: 1,
    maxZoom: 6,
    minNativeZoom: 3,
    maxNativeZoom: 3,
    continuousWorld: true,
    tms: false
})

var map = L.map("mapbox", {
    attributionControl: false,
    minZoom: 1,
    maxBounds: [
        [64, -64],
        [-1024, 1024]
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

