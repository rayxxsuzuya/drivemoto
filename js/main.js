
$('.banner-section__slider').slick({
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
	infinite: true,
});

$('.products-slider').slick({
	// autoplay: true,
	// autoplaySpeed: 2000,
	infinite: true,
	slidesToShow: 4,
	arrows: true
});

let tab = document.querySelectorAll('.tab');
let content = document.querySelectorAll('.tabs-content');

for (let i = 0; i < tab.length; i++) {

	tab[i].addEventListener('click', function(e) {
		e.preventDefault();

		for (let j = 0; j < tab.length; j++) {
			tab[j].classList.remove('tab--active')
		}
		this.classList.add('tab--active');

		for (let a = 0; a < content.length; a++) {
			content[a].classList.remove('tabs-content--active');
		}

		content[i].classList.add('tabs-content--active');
	});
}


let favorite = document.querySelectorAll('.product-item__favorite');

for (let i = 0; i < favorite.length; i++) {
	favorite[i].addEventListener('click', function() {
		this.classList.toggle('product-item__favorite--active');
	})
}

