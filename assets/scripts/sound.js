// Javascript for playing a sound

var beepOne = $("#beep-one")[0];
$("#nav-one a")
	.mouseenter(function() {
		beepOne.play();
	});
