var data = []

fetch('https://shiptest.net/renders/maps.json')
  	.then(function (response) {
    	return response.json();
  	})
  	.then(function (result) {
    	renderMaps(result);
  	})
  	.catch(function (err) {
    	console.log(err);
  	});

function renderMaps(data) {
	var mapList = document.createElement('ul');
	mapList.classList.add("simple_list");
	for (mapName in data) {
		var mapNameText = document.createTextNode(mapName);

		var mapLink = document.createElement('a');
		mapLink.innerHTML = "Webmap";
		mapLink.href = "https://shiptest.net/map?map=" + data[mapName]

		var mapLinkFull = document.createElement('a');
		mapLinkFull.innerHTML = "Full Render";
		mapLinkFull.href = "https://shiptest.net/renders/initial/padded/" + data[mapName] + ".png"

		var mapParagraph = document.createElement('li');
		mapParagraph.appendChild(mapNameText);
		mapParagraph.appendChild(mapLink);
		mapParagraph.appendChild(mapLinkFull);

		mapList.appendChild(mapParagraph);
	}
	document.getElementById("main").appendChild(mapList);
}
