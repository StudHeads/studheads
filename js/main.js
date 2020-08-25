$(document).ready(function(){
	$("a.anim").click(function(){
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top-90 + "px"
		}, {
			duration: 700,
			easing: "swing"
		});
		return false;
	});

	$('.popup-click').on("click", function(){
		$('.overlay').show();
	});
	$('.popup-close').on("click", function(){
$('.overlay').hide();
	});

});