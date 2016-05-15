// Свой код с jQuery

$( document ).ready(function() {
	$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
           items:1
        }
        //600: {
          // items:2
        //}
        //1000:{
        //    reviews__item:5
        //}
    }
})
});
