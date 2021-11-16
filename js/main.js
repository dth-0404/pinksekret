var d = document.getElementById("default"),
	a = document.getElementById("shown");
(d.onclick = function () {
	(d.style.display = "none"), (a.style.display = "block");
}),
	(a.onclick = function () {
		(a.style.display = "none"),
			setTimeout(function () {
				d.style.display = "block";
			}, 1450);
	});
$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll > 10) {
		$("#navbar").removeClass("bg-transparent");
	} else {
		$("#navbar").addClass("bg-transparent");
	}
});
var d = document.getElementById("default");
var a = document.getElementById("shown");
d.onclick = function () {
	d.style.display = "none";
	a.style.display = "block";
};
a.onclick = function () {
	d.style.display = "block";
	a.style.display = "none";
};
function validate(evt) {
	var theEvent = evt || window.event;
	if (theEvent.type === "paste") {
		key = event.clipboardData.getData("text/plain");
	} else {
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode(key);
	}
	var regex = /[0-9()]|\+/;
	if (!regex.test(key)) {
		theEvent.returnValue = false;
		if (theEvent.preventDefault) theEvent.preventDefault();
	}
}
