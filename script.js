function ScrollReveal()

ScrollReveal({ reset: true });
ScrollReveal().reveal('.container');

//para dar blink no ponto final no logo
function blink() {
	$('.blink').fadeOut(500);
    $('.blink').fadeIn(500);
}
setInterval(blink, 1000);