// Javascript for playing a sound
<audio controls preload="auto">
	<source src="assets/data/Error-sound.mp3" controls></source>
</audio>

var beepOne = $("#beep-one")[0];
$("#nav-one a")
	.mouseenter(function() {
		beepOne.play();
	});
