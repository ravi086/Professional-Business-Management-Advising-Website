(function ($) {
	"use strict";
	// /*========== Responsive Menu  ==========*/
	$('.header__area-main-menu').meanmenu({
		meanMenuContainer: '.responsive-menu',
		meanScreenWidth: '991',
		meanMenuOpen: '<span></span><span></span><span></span>',
		meanMenuClose: '<i class="flaticon-close"></i>'
	});
	// /*==========  wow  ==========*/
	new WOW().init();
	/*========== menu-bar sticky  ==========*/
	$(window).on('scroll', function () {
		var scrollDown = $(window).scrollTop();
		if (scrollDown < 135) {
			$(".header__area-menu").removeClass("header__area-menu-sticky-menu");
		} else {
			$(".header__area-menu").addClass("header__area-menu-sticky-menu");
		}
	});
	// /*==========  banner  ==========*/
	var swiper = new Swiper(".banner-slider", {
		slidesPerView: 1,
		effect: 'fade',
		loop: true,
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	/*==========  counterUp  ==========*/
	var counter = $('.counter');
	counter.counterUp({
		time: 2500,
		delay: 100
	});
	/*==========  Search  =========*/
	$('.header__area-search-icon.open').on('click', function () {
		$('.header__area-search-box').fadeIn().addClass('active');
	});
	$('.header__area-search-box').on('click', function () {
		$(this).fadeIn().removeClass('active');
	});
	$('.header__area-search-box-icon').on('click', function () {
		$('.header__area-search-box').fadeOut().removeClass('active');
	});
	$('.header__area-search-box form').on('click', function (e) {
		e.stopPropagation();
	});
	/*==========  img-popup  ==========*/
	$('.img-popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	/*==========  video-popup  ==========*/
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});
	/*==========  background  ==========*/
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	})
	/*========== scroll to top  ==========*/
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 200) {
			$('.scroll-top').fadeIn(200);
		} else {
			$('.scroll-top').fadeOut(200);
		}
	});
	$('.scroll-top').on('click', function (event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
	/*==========  theme loader  ==========*/
	$(window).on("load", function () {
		$(".theme-loader").fadeOut(500);
		/*==========  Progress Bar  ==========*/
		if ($('.experience__area-skill-bar').length) {
			$('.experience__area-skill-bar').appear(function () {
				var el = $(this);
				var percent = el.data('width');
				$(el).css('width', percent + '%');
			}, {
				accY: 0
			});
		};
		// /*==========  Portfolio  ==========*/
		var swiper = new Swiper(".portfolio__area-slider", {
			slidesPerView: 3,
			loop: true,
			speed: 1500,
			spaceBetween: 30,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				768: {
					spaceBetween: 30,
					slidesPerView: 2
				},
				992: {
					slidesPerView: 2
				},
				1200: {
					slidesPerView: 3
				},
			}
		});
		// /*==========  testimonial  ==========*/
		var swiper = new Swiper(".testimonial-slider", {
			slidesPerView: 2,
			loop: true,
			speed: 1000,
			spaceBetween: 30,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				768: {
					slidesPerView: 2
				},
				992: {
					slidesPerView: 1
				},
				1200: {
					slidesPerView: 2
				},
			}
		});
	});
})(jQuery);