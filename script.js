myElement.style.color = "green";
myElement.style.fontWeight = "bold";
myElement.style.fontFamily = "Arial";

function oreparePage() {
	document.getElementById("mainContent").onClick = function() {
		if (document.getElementById("mainContent").className == "element") {			
		} else {
			document.getElementById("mainContent").className = "element";
		}
	}
};