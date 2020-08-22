
$('.banner-section__slider').slick({
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
	infinite: true,
});

let tab = document.querySelectorAll('.search__tabs-item');
let content = document.querySelectorAll('.search__content-item');

for (let i = 0; i < tab.length; i++) {

	tab[i].addEventListener('click', function(e) {
		e.preventDefault();

		for (let j = 0; j < tab.length; j++) {
			tab[j].classList.remove('search__tabs-item--active')
		}
		this.classList.add('search__tabs-item--active');

		for (let a = 0; a < content.length; a++) {
			content[a].classList.remove('search__content-item--active');
		}

		content[i].classList.add('search__content-item--active');
	});
}