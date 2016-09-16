window.onload = () =>{
	//open navigation
	const mainNav = new linkActiveClass('header .box__link');
	mainNav.activeState('box__link--active', 'header__navigation-bar-active');
	//open user cards
	const userNav = new linkActiveClass('header .card-nav');
	userNav.activeState('header__button--active', 'user-menu__card-active');

	closeUserCards();

	const searchBar = new linkActiveClass('header #header-search');
	searchBar.activeState('header__button--active', 'search__bar--active');

	//menu search bar
	submitSearch();

	window.addEventListener('scroll', () => {

        //console.log(window.innerHeight);
        let olark = document.getElementById('habla_window_div'),
            olarkWrapper = document.getElementById('habla_beta_container_do_not_rely_on_div_classes_or_names');
        if (page('habla_window_div')) {
            if (olarkWrapper.getBoundingClientRect().top > window.innerHeight && !mobileDevice()) {
                olark.classList.remove('olarkSet');
            } else {
                olark.classList.add('olarkSet');
            }
        }
    });

    window.addEventListener('resize', () => {
        let olark = document.getElementById('habla_window_div'),
            olarkWrapper = document.getElementById('habla_beta_container_do_not_rely_on_div_classes_or_names');
        if (page('habla_window_div')) {
            if (olarkWrapper.getBoundingClientRect().top > window.innerHeight && !mobileDevice()) {
                olark.classList.remove('olarkSet');
            } else {
                olark.classList.add('olarkSet');
            }
        }
    });
}