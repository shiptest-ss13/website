var coll = document.getElementsByClassName("collapsible");

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
} 

var mapElements = document.body.getElementsByClassName("mapbox")
for (i = 0; i < mapElements.length; i++) {
    mapElements[i].style.display = "none"
}