"use strict";

var slidesMargin = 0;

var slidesNumber = $('.slides > li').length;

var slideWidth = 1280;

$('.slides > li').width(slideWidth);
$('.slides').width(slideWidth * slidesNumber);

$(window).on('wheelscroll', function () {
	alert(123);
});


// Mouse wheel

var wheel_handle = function (direction) {
	if (direction > 0) {
		slidesMargin += slideWidth / 2;
	} else {
		slidesMargin -= slideWidth / 2;
	}
	$('.slides').css('margin-left', slidesMargin+'px');
	console.log(slidesMargin);
};
		
var mouse_wheel = function(event) {
	if (false == !!event) event = window.event;
	var direction = ((event.wheelDelta) ? event.wheelDelta/120 : event.detail/-3) || false;
	if (direction && !!wheel_handle && typeof wheel_handle == "function") {
		if (event.preventDefault) event.preventDefault();
		event.returnValue = false;
		wheel_handle(direction);
	}
}		

if (window.addEventListener) window.addEventListener("DOMMouseScroll", mouse_wheel, false);
window.onmousewheel = document.onmousewheel = mouse_wheel;


// Menu

function menuChange(n) {
	var menuItems = document.querySelectorAll('.menu > li');
	for (var i = 0; i < menuItems.length; i++) {
		menuItems[i].className = "";
		if (i == n) {
			menuItems[i].className = "active";
		}
	}
}

menuChange(1);

$('.menu li').on('click', function() {
	menuChange(this.id);
});

function smartMenuChange(n) {
	var menuItems = document.querySelectorAll('.smart-menu > li');
	for (var i = 0; i < menuItems.length; i++) {
		menuItems[i].className = "";
		if (i == n) {
			menuItems[i].className = "active";
		}
	}
}

smartMenuChange(1);

$('.smart-menu li').on('click', function() {
	smartMenuChange(this.id);
});


$('.shake-modal').on('click', function() {
	$('.shake-modal').addClass('animated').addClass('fadeInRight');
	setTimeout(function(){ $('.shake-modal').removeClass('animated').removeClass('fadeInRight'); }, 2000);
	setTimeout(function(){ $('.shake-modal').addClass('animated').addClass('shake'); }, 3000);
	setTimeout(function(){ $('.shake-modal').removeClass('animated').removeClass('shake'); }, 5000);
	
});

$('.stupid-shake-modal').on('click', function() {
	$('.stupid-shake-modal').addClass('animated').addClass('fadeInRight');
	setTimeout(function(){ $('.stupid-shake-modal').removeClass('animated').removeClass('fadeInRight'); }, 2000);
	
});