// Javascript for playing a sound

$("nav a") // loop each menu item
  .each(function(i) {
    if (i != 0) { // only clone if more than one needed
      $("#beep")
        .clone()
        .attr("id", "beep-" + i)
        .appendTo($(this).parent()); 
    }
    $(this).data("beeper", i); // save reference 
  })
  .mouseenter(function() {
    $("#beep-" + $(this).data("beeper"))[0].play();
  });
$("#beep").attr("id", "beep-0"); // get first one into naming convention
