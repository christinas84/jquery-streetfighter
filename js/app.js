$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    console.log('mousedown');
    playHadouken ();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
  .animate(
    {'left': '1020px'},
    500,
    function() {
      $(this).hide();
      $(this).css('left', '520px');
    }
);
  })
  .mouseup(function() {
    console.log('mouseup');
  $('.ryu-throwing').hide();
  $('.ryu-ready').show();
})
  $(document).keydown(function(e) {
   	if(e.keyCode == 88) {
            $('.ryu-action').hide();
            $('.ryu-cool').show();
        }
    }).keyup(function(e) {
        if(e.keyCode == 88) {
            $('.ryu-ready').show();
            $('.ryu-cool').hide();
   		}
   	})
  });
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
	$(document).ready(function() {
		$('.sf-logo').fadeIn(3500).fadeOut(3500); 
			 $('.how-to').delay(7000).fadeIn(3500);
		});
	


	

