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


    $('.lnks').on('click', '.lnk.discover', function () {
        $('.top-menu a[href="' + $(this).attr('href') + '"]').trigger('click');
        return false;
    });

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


    var $container = $('.grid-items');

    $container.imagesLoaded(function () {
        setTimeout(function() {$container.multipleFilterMasonry({
            itemSelector: '.grid-item',
            filtersGroupSelector: '.filter-button-group',
            percentPosition: true,
            gutter: 0
        });
    }, 5)
    });


	/*
		12. Initialize masonry filter
	*/
    $('.filter-button-group').on('change', 'input[type="radio"]', function () {
        $('.f_btn').removeClass('active');
        $(this).closest('.f_btn').addClass('active');

        $('.has-popup-image').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'popup-box',
            image: {
                verticalFit: true
            }
        });
    }).find('input[type="radio"][value="grid-item"]').trigger('change');

	/*
		Validate Contact Form
	*/
    $("#cform").validate({
        ignore: ".ignore",
        rules: {
            name: {
                required: true
            },
            message: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            hiddenRecaptcha: {
                required: function () {
                    if (grecaptcha.getResponse() == '') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        },
        success: "valid",
        submitHandler: function () {
            $.ajax({
                url: 'https://www.enformed.io/v6sdzt7v',
                type: 'post',
                dataType: 'html',
                data: $('#cform').serializeArray().map(function (value) {
                    return value.name+'='+value.value;
                }).join('&'),
                success: function () {
                    $('#cform').slideUp();
                    $('.alert-success').delay(1000).fadeIn();
                },
                error: function () {
                    console.log(arguments);
                }
            });
        }
    });
});
