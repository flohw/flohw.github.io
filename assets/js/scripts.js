/*
*   Author: beshleyua
*   Author URL: http://themeforest.net/user/beshleyua
*/


/*
	Preloader
*/

$(window).on("load", function() {
	var preload = $('.preloader');
	preload.find('.spinner').fadeOut(function(){
		preload.fadeOut();
	});
});

$(function () {
	/* Vars */
	var width = $(window).width();
	var height = $(window).height();

	/* Header Menu Desktop */
	var container = $('.container');
	var card_items = $('.card-inner');
	var animation_in = container.data('animation-in');
	var animation_out = container.data('animation-out');

	$('.top-menu').on('click', 'a', function(){
		/* vars */
		var id = $(this).attr('href');
		var h = parseFloat($(id).offset().top);
		var card_item = $(id);
		var menu_items = $('.top-menu li');
		var menu_item = $(this).closest('li');
		var d_lnk = $('.lnks .lnk.discover');

		/* if desktop */
		if(!menu_item.hasClass('active') & (width > 1023) & $('#home-card').length) {
			/* close card items */
			menu_items.removeClass('active');
			container.find(card_items).removeClass('animated '+animation_in);

			if($(container).hasClass('opened')) {
				container.find(card_items).addClass('animated '+animation_out);
			}

			/* open card item */
			menu_item.addClass('active');
			container.addClass('opened');
			container.find(card_item).removeClass('animated '+animation_out);
			container.find(card_item).addClass('animated '+animation_in);

			$(card_items).addClass('hidden');

			$(card_item).removeClass('hidden');
			$(card_item).addClass('active');
		}

		/* if mobile */
		if((width < 1024) & $('#home-card').length) {
			/* scroll to section */
			$('body,html').animate({
				scrollTop: h - 76
			}, 800);
		}

		return false;
    });


    /*
        Display selected card if preset
    */

    if ('' !== window.location.hash) {
        $('.top-menu a[href="' + window.location.hash + '"]').trigger('click');
    }

	/*
		Smoothscroll
	*/

	if((width < 1024) & $('#home-card').length) {
		$(window).on('scroll', function(){
			var scrollPos = $(window).scrollTop();
			$('.top-menu ul li a').each(function () {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));
				if (refElement.offset().top - 76 <= scrollPos) {
					$('.top-menu ul li').removeClass("active");
					currLink.closest('li').addClass("active");
				}
			});
		});
	}


	/*
		slimScroll
	*/

    if(width > 1024) {
        $('.card-inner .card-wrap').slimScroll({
            height: '570px'
        });
    }

});
