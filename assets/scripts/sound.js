// Javascript for playing a sound
<audio controls preload="auto">
	<source src="assets/data/Error-sound.mp3" controls></source>
</audio>

$("#nav-two a")
  .each(function(i) {
    if (i != 0) {
      $("#beep-two")
        .clone()
        .attr("id", "beep-two" + i)
        .appendTo($(this).parent());
    }
    $(this).data("beeper", i);
  })
  .mouseenter(function() {
    $("#beep-two" + $(this).data("beeper"))[0].play();
  });
$("#beep-two").attr("id", "beep-two0");
