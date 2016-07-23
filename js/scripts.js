$(document).ready(function(){
	$('.dropdown > a').click(function () {
		$(this).parent().toggleClass('open');
		return false
	});
	$('.menu-open').click(function () {
		$('.main-nav').removeClass('menu-hide');
		return false
	});
	$('.close-menu').click(function () {
		$('.main-nav').addClass('menu-hide');
		return false
	});
});