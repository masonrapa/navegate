//Replace idontknow for the ID of the html <a> or the buttom
//Replace the 777px for the number of pixels you want to go down
//Put 0px for go back to the highest pixel of the website
$(document).ready(function(){
	$('#idontknow').click(function(){
		$('body, html').animate({
			scrollTop: '777px'
		},300 );
	});
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		};
	});
});
