"use strict";

/* -------------------------------> DAVID JS <------------------------------------ */

/* TOGGLE FOR MOBILE DROPDOWN */

$('.hamburger-wrapper').click(function() {
	$(".dropdown-mobile").toggleClass('show-mobile');
	$(this).toggleClass('hamburger-animate');
});

$(document).click(function() {
	$(".dropdown-mobile").removeClass('show-mobile');
	$('.hamburger-wrapper').removeClass('hamburger-animate');
});

$('.hamburger-wrapper').click(function(e) {
	e.stopPropagation();
});

$('.dropdown-mobile').click(function(e) {
	e.stopPropagation();
});

/* TOGGLE FOR DESKTOP DROPDOWN */

$('.games').click(function() {
	$(".dropdown-desktop").slideToggle('slow');
	$(".drop-arrow").toggleClass('rotate180');
});

$(document).click(function() {
	$('.dropdown-desktop').slideUp('slow');
	$(".drop-arrow").removeClass('rotate180');
});

$('.games').click(function(e) {
	e.stopPropagation();
});

$('.dropdown-desktop').click(function(e) {
	e.stopPropagation();
});

/* SLIDER */

$(function() {

	// config
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var width = windowWidth;
	var animationSpeed = 1000;
	var pause = 5000;
	var current = 1;

	var interval;


	// cache DOM
	var $slider = $('.slider');
	var $slides = $slider.find('.slides');
	var $slide = $slides.find('.slide');
	var $slideRight = $slider.find('.slide-right');
	var $slideLeft = $slider.find('.slide-left');

	function startSlider(){
		interval = setInterval(function() {

			$slides.animate({'margin-left': '-=' + width}, animationSpeed, function() {
				current++;
				if (current === $slide.length) {
					current = 1;
					$slides.css('margin-left', 0);
				}
			});
		}, pause);
	}

	function stopSlider(){
		clearInterval(interval);
	}

	startSlider();

	$slider.hover(function () {
		stopSlider();
	});
	$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

	$slideRight.click(function() {
		if (current === ($slide.length - 1)) {}
		else {
			current++;
			$slides.animate({'margin-left': '-=' + width}, animationSpeed);	
		}
		
	});

	$slideLeft.click(function() {
		if (current === 1) {}
		else {
			current--;
			$slides.animate({'margin-left': '+=' + width}, animationSpeed);	
		}
	});

	$slide.css('width', windowWidth);

	$(window).on('resize', function(){

		if (windowWidth != $(window).width()) {
			current = 1;
			windowWidth = $(this).width();
			$slide.css('width', windowWidth);
			$slides.animate({'margin-left': '0' }, animationSpeed);
			width = windowWidth;
			stopSlider();
			startSlider();
		}
	});
});


/* ----------------------------------------> MARKUS JS <--------------------------------------------- */

function nav(pos){
var lati = pos.coords.latitude;
var long = pos.coords.longitude;

document.getElementById('mapnav').src ="https://www.google.com/maps/embed/v1/directions?key=AIzaSyB_xv_J9tS-pUxD1txFaDh3VgewhPKQa6g&zoom=7&destination=Elgtråkket+7+4844+Arendal&origin="+lati+","+long

    //console.log(lati);    
    //console.log(long);

}

function locationFind() {
navigator.geolocation.getCurrentPosition(nav)    
// This is the whole deal, it asks for premision from the browser and then displays the map if permision was given
}

function emailResponse() {
    document.getElementById(email).action = alert("Thanks for signing up on our malinglist");
}