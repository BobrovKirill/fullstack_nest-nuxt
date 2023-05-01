export default function () {
	const header = document.querySelector('.header');
	const ring = document.querySelector('.ring');

	const headerObserve = new IntersectionObserver((entries) => {
		if (entries[0].isIntersecting) {
			header.classList.remove('header_fixed');
			ring.style.transform = 'translate(0, 0px)';
		} else {
			header.classList.add('header_fixed');
			ring.style.transform = 'translate(0, -25px)';
		}
	});
	if (ring) headerObserve.observe(ring);
}
