"use stric";

jQuery(document).ready(function(){
	var hobonichi = function(){};

	hobonichi.prototype.init = function() {
		this.owlCarousel = $('.owl-carousel');
		this.magPopup = $('.popup-gallery');

		this.bindEvents();
	};

	hobonichi.prototype.bindEvents = function() {
		this.bindCarousel();
		this.bindPopup();
	};

	hobonichi.prototype.bindCarousel = function() {
		var self = this;
		self.owlCarousel.each(function() {
            var config = {}; 
            config.singleItem = $(this).data('singleitem');
            config.pagination = $(this).data('pagination');
            config.navigation = $(this).data('navigation');
            config.navigationText = $(this).data('navigationtext');
            config.autoPlay = $(this).data('autoplay');
            config.slideSpeed = $(this).data('slidep peed');            
            $(this).owlCarousel(config);
        });
	};

	hobonichi.prototype.bindPopup = function() {
		var self = this;
		self.magPopup.magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}
			}
		});
	}

	var appObj = new hobonichi();
	appObj.init();
});

