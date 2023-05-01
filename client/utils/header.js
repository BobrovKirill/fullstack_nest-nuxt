class Header {
	constructor(root, windowWidth) {
		this.root = root;
		this.body = document.querySelector('body');
		this.burgerBtn = this.root.querySelector('.header__burger');
		this.nav = this.root.querySelector('.nav');
		this.navItems = this.nav.querySelectorAll('.nav__rubric');
		this.windowWidth = windowWidth;

		this.burgerBtn.addEventListener('click', this.showNav.bind(this));
	}

	showNav() {
		if (this.burgerBtn.matches('.active')) {
			this.burgerBtn.setAttribute('aria-label', 'Открыть меню');
		} else {
			this.burgerBtn.setAttribute('aria-label', 'Закрыть меню');
			this.openNav();
		}
		this.burgerBtn.classList.toggle('active');
		this.nav.classList.toggle('active');
		this.body.classList.toggle('no-scroll');
	}

	openNav() {
		this.removeCssClass(this.navItems);

		if (this.windowWidth >= 768) this.navItems[0].classList.add('active');

		this.nav.addEventListener('click', this.navControl.bind(this));
	}

	removeCssClass(list, className = 'active') {
		list.forEach((el) => el.classList.remove(className));
	}

	navControl({ target }) {
		if (target === this.nav) {
			target.classList.remove('active');
			this.burgerBtn.setAttribute('aria-label', 'Открыть меню');
			this.burgerBtn.classList.remove('active');
			this.body.classList.remove('no-scroll');
		}
		if (target.closest('.nav__rubric') && !target.matches('a')) {
			this.removeCssClass(this.navItems);
			target.closest('.nav__rubric').classList.add('active');
		}
	}
}

export default Header;
