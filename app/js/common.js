$(document).ready(function(){
	
	$(".carousel-welcome").owlCarousel({
		loop: true,
  		nav: true,
  		items: 3,
  		center: true,
  		dots: false,
  		smartSpeed: 700,
  		navText: ['<img src="img/arrow-prev.png" alt="prev">', '<img src="img/arrow-next.png" alt="next">'],
  		responsiveClass: true,
  		responsive: {
  			0: {
  				items: 1
  			},
  			1200: {
  				items: 1
  			}
  		}
	});
  
  	$(".carousel-elegant").owlCarousel({
  		loop: true,
  		nav: false,
  		margin: 50,
  		dotsEach: true,
  		autoplay: true,
  		smartSpeed: 700,
  		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
  		responsiveClass: true,
  		responsive: {
  			0: {
  				items: 2,
  				margin: 20
  			},
  			576: {
  				items: 2,
  				margin: 35
  			},
  			992: {
  				items: 3
  			},
  			1200: {
  				items: 4
  			}
  			
  		}

	});
	$(".carousel-latest").owlCarousel({
		loop: true,
  		nav: true,
  		dots: false,
  		smartSpeed: 1200,
  		mouseDrag: false,
  		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
  		responsiveClass: true,
  		responsive: {
  			0: {
  				items: 1
  			},
  			1200: {
  				items: 1
  			}
  		}
	});
	$(function(){
      $('.top').on('click',function(){
        $(this).closest('.burger').toggleClass('menu-open');
      });
    });

});
