
$('.banner-section__slider').slick({
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
	infinite: true,
	responsive: [
		{
			breakpoint: 968,
			settings: {
				centerMode: true,
				centerPadding: '0',
			}
		},
		{
			breakpoint: 640,
			settings: {
				arrows: false,
			}
		},
	]
});

$('.products-slider').slick({
	// autoplay: true,
	// autoplaySpeed: 2000,
	infinite: true,
	slidesToShow: 4,
	arrows: true,
	responsive: [
		{
			breakpoint: 1260,
			settings: {
				arrows: false,
				dots: true,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 1152,
			settings: {
				dots: true,
				arrows: false,
				slidesToScroll: 1,
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 862,
			settings: {
				dots: true,
				arrows: false,
				slidesToScroll: 2,
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 591,
			settings: {
				dots: true,
				arrows: false,
				slidesToScroll: 1,
				slidesToShow: 1,
			}
		},
	]
});


let favorite = document.querySelectorAll('.product-item__favorite');

for (let i = 0; i < favorite.length; i++) {
	favorite[i].addEventListener('click', function() {
		this.classList.toggle('product-item__favorite--active');
	})
}


let tab = document.querySelectorAll('.tab');
let content = document.querySelectorAll('.tabs-content');


for (let i = 0; i < tab.length; i++) {
	tab[i].addEventListener('click', function(e) {
		e.preventDefault();
		for (let j = 0; j < tab.length; j++) {
			tab[j].classList.remove('tab--active');
		}
		this.classList.add('tab--active');
		for (let j = 0; j < content.length; j++) {
			content[j].classList.remove('tabs-content--active');
		}
		content[i].classList.add('tabs-content--active');
	})
}

let tabAside = document.querySelectorAll('.tab.aside-filter__tab');
let contentAside = document.querySelectorAll('.tabs-content.aside-filter-content');

for (let i = 0; i < tabAside.length; i++) {
	tabAside[i].addEventListener('click', function (e) {
		e.preventDefault();
		for (let j = 0; j < tabAside.length; j++) {
			tabAside[j].classList.remove('tab--active');
		}
		this.classList.add('tab--active');
		for (let j = 0; j < contentAside.length; j++) {
			contentAside[j].classList.remove('tabs-content--active');
		}
		contentAside[i].classList.add('tabs-content--active');
	})
}


let menuBtn = document.querySelector('.menu__btn');
let menuLine = document.querySelectorAll('.menu__btn-line');

menuBtn.addEventListener('click', function() {
	document.querySelector('.menu-mobile__list').classList.toggle('active');
	for( let i = 0; i < menuLine.length; i++) {
		menuLine[i].classList.toggle('active');
	}
});