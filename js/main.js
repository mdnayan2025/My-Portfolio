$(document).ready(function () {
  // Burger toggle
  $("#burger").on("click", function () {
    var $burger = $(this);
    var $menu = $(".main-navigation__ul");

    $burger.toggleClass("change");
    $menu.toggleClass("show");

    // Accessibility
    var expanded = $burger.hasClass("change");
    $burger.attr("aria-expanded", expanded ? "true" : "false");

    // block scroll when menu open (optional)
    if (expanded) {
      $("body").addClass("stop-scroll");
    } else {
      $("body").removeClass("stop-scroll");
    }
  });

  /* About me slider */
  $(".about-me-slider").slick({
    slidesToShow: 1,
    prevArrow: '<span class="span-arrow slick-prev"><</span>',
    nextArrow: '<span class="span-arrow slick-next">></span>',
  });

  /* Blog slider */
  $(".blog-slider").slick({
    slidesToShow: 2,
    prevArrow: '<span class="span-arrow slick-prev"><</span>',
    nextArrow: '<span class="span-arrow slick-next">></span>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

	/* About me slider */
	$('.about-me-slider').slick({
		slidesToShow: 1,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>'
	});

	/* Blog slider */
	$('.blog-slider').slick({
		slidesToShow: 2,
		prevArrow: '<span class="span-arrow slick-prev"><</span>',
		nextArrow: '<span class="span-arrow slick-next">></span>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});
	
});



var counta = 0;

$(window).scroll(function(e){


	/* Onscroll number counter */
	var statisticNumbers = $('.single-count');
	if(statisticNumbers.length) {
		var oTop = statisticNumbers.offset().top - window.innerHeight;
		if (counta == 0 && $(window).scrollTop() > oTop) {
			$('.count').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},

				{
					duration: 2000,
					easing: 'swing',
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
					}
				});
			});
			counta = 1;
		}
	}

});
