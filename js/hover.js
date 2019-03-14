var $myvideo = $('.myvideo');
var $index;

$myvideo.on('mouseenter', function() {
	$(this).css("cursor", "pointer");
	$('.uk-overlay-primary').css("display", "block");
	$('.uk-overlay-primary:eq('+$index+')').css("display", "none");
	
	$index = $myvideo.index(this);
	$myvideo.get($index).play();
});

$myvideo.on('mouseout', function() {
	$myvideo.get($index).pause();
	$('.uk-overlay-primary').css("display", "none");
})