$(function () {


	/*
		Hire Button
	*/

    $('.lnks').on('click', '.lnk.discover', function () {
        $('.top-menu a[href="#contacts-card"]').trigger('click');
    });


	/*
		Initialize masonry items
	*/

    var $container = $('.grid-items');

    $container.imagesLoaded(function () {
        $container.multipleFilterMasonry({
            itemSelector: '.grid-item',
            filtersGroupSelector: '.filter-button-group',
            percentPosition: true,
            gutter: 0
        });
    });


	/*
		12. Initialize masonry filter
	*/

    $('.filter-button-group').on('change', 'input[type="radio"]', function () {
        if ($(this).is(':checked')) {
            $('.f_btn').removeClass('active');
            $(this).closest('.f_btn').addClass('active');
        }
        /* popup image */
        $('.has-popup-image').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'popup-box',
            image: {
                verticalFit: true
            }
        });

        /* popup video */
        $('.has-popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            disableOn: 0,
            mainClass: 'popup-box'
        });

        /* popup music */
        $('.has-popup-music').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            disableOn: 0,
            mainClass: 'popup-box'
        });

        /* popup media */
        $('.has-popup-media').magnificPopup({
            type: 'inline',
            overflowY: 'auto',
            closeBtnInside: true,
            mainClass: 'popup-box-inline'
        });
    });

	/*
		Popups
	*/

    /* popup video */
    $('.has-popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        disableOn: 0,
        mainClass: 'popup-box'
    });

    /* popup music */
    $('.has-popup-music').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        disableOn: 0,
        mainClass: 'popup-box'
    });

    /* popup media */
    $('.has-popup-media').magnificPopup({
        type: 'inline',
        overflowY: 'auto',
        closeBtnInside: true,
        mainClass: 'popup-box-inline',
        callbacks: {
            open: function () {
                $('.popup-box-inline .popup-box').slimScroll({
                    height: height + 'px'
                });
            }
        }
    });

	/*
		Validate Comment Form
	*/
	$("#comment_form").validate({
		rules: {
			name: {
				required: true
			},
			message: {
				required: true
			}
		},
		success: "valid",
		submitHandler: function() {
		}
    });
});
