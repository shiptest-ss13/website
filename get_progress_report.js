fetch('https://progress.shiptest.net/index.html')
    .then(response => response.text())
  	.then(function (result) {
    	addProgressReports(result);
  	})
  	.catch(function (err) {
    	console.log(err);
  	});

function addProgressReports(data) {
    var progressReports = document.getElementById("progress-reports");
    progressReports.innerHTML = data;
}