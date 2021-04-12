var hamburger = document.querySelector('.hamburger');
var times = document.querySelector('.times');
var home = document.querySelector('.home');
var about = document.querySelector('.about');
var certificate = document.querySelector('.certificate');
var mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
	mobileNav.classList.add('open');
	home.classList.add('open');
	about.classList.add('open');
	certificate.classList.add('open');
});

times.addEventListener('click', function(){
	mobileNav.classList.remove('open');
});

home.addEventListener('click', function(){
	mobileNav.classList.remove('open');
});

about.addEventListener('click', function(){
	mobileNav.classList.remove('open');
});

certificate.addEventListener('click', function(){
	mobileNav.classList.remove('open');
});