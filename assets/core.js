$(document).ready(function() {
	$(".navbar a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {
				window.location.hash = hash;
			});
		}
	});
});
$(window).scroll(function() {
	if ($(this).scrollTop() > 20) {
		$('#navbar').addClass('header-scrolled');
	} else {
		$('#navbar').removeClass('header-scrolled');
	}
});