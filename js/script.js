'use strict';

var mobileDevice = function mobileDevice() {
	if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
		return true;
	} else {
		return false;
	}
};

var notify = function notify(title, bodyText, iconImage) {
	var options = {
		body: bodyText,
		icon: iconImage
	};
	if (!mobileDevice()) {
		if (Notification.permission === "granted") {
			var notification = new Notification(title, options);
		}
	} else {
		alert(bodyText);
	}
};

var page = function page(id) {
	if (document.contains(document.getElementById(id))) {
		return true;
	} else {
		return false;
	}
};

var hasClass = function hasClass(element, className) {
	return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
};

var linkActiveClass = function linkActiveClass(element) {
	var obj = {},
	    link = document.querySelectorAll(element);
	obj.clearActiveClasses = function (activeClass, activeNavClass) {
		for (var i = 0; i < link.length; i++) {
			link[i].classList.remove(activeClass);
			var navigationID = link[i].getAttribute('href');
			document.getElementById(navigationID).classList.remove(activeNavClass);
		}
	}, obj.activeState = function (activeClass, activeNavClass) {
		var _loop = function _loop(i) {

			link[i].addEventListener('click', function (event) {
				event.preventDefault();

				if (!hasClass(link[i], activeClass)) {
					obj.clearActiveClasses(activeClass, activeNavClass);
					link[i].classList.add(activeClass);
					var navigationID = link[i].getAttribute('href');
					document.getElementById(navigationID).classList.add(activeNavClass);
				} else {
					link[i].classList.remove(activeClass);
					var _navigationID = link[i].getAttribute('href');
					document.getElementById(_navigationID).classList.remove(activeNavClass);
				}
			});
		};

		for (var i = 0; i < link.length; i++) {
			_loop(i);
		}
	};

	return obj;
};

var closeUserCards = function closeUserCards() {
	var closeCardBtn = document.querySelectorAll('.user-menu__card--close-btn'),
	    userNav = document.querySelectorAll('.card-nav'),
	    userCard = document.querySelectorAll('.user-menu__card');

	var hideAllCards = function hideAllCards() {
		for (var i = 0; i < userCard.length; i++) {
			userCard[i].classList.remove('user-menu__card-active');
			userNav[i].classList.remove('header__button--active');
		}
	};

	for (var i = 0; i < closeCardBtn.length; i++) {
		closeCardBtn[i].addEventListener('click', function () {
			hideAllCards();
		});
	}
};
'use strict';

var submitSearch = function submitSearch() {
    var searchBtn = document.querySelector('#search input[type="submit"]'),
        input = document.querySelector('#search input[type="text"]'),
        newResults = document.getElementById('search-results'),
        searchTimer = void 0;

    searchBtn.addEventListener('click', function (event) {
        event.preventDefault();
        newResults.style.padding = "10px 0px";
        search(input.value);
    });
};
//search/node/hats
var search = function search(data) {
    var xmlhttp = new XMLHttpRequest(),
        newResults = document.getElementById('search-results');

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                var parser = new DOMParser(),
                    doc = parser.parseFromString(xmlhttp.responseText, "text/html"),
                    results = doc.getElementById('search-container').childNodes,
                    main = document.querySelectorAll('main')[0];

                for (var i = 0; i < results.length; i++) {
                    if (results[i].tagName === "FIELDSET" || results[i].tagName === "H2" || results[i].tagName === "UL") {
                        newResults.appendChild(results[i]);
                    }
                }
            } else {
                var title = "C3 Shop",
                    bodyText = "Oops! Something went wrong. Please refresh the page.",
                    iconImage = Drupal.settings.basePath + "sites/all/themes/union1617/images/union-icon.png";

                notify(title, bodyText, iconImage);
            }
        }
    };

    xmlhttp.open("GET", Drupal.settings.basePath + 'search/node/' + data, true);
    xmlhttp.send();
};
'use strict';

window.onload = function () {
    //open navigation
    var mainNav = new linkActiveClass('header .box__link');
    mainNav.activeState('box__link--active', 'header__navigation-bar-active');
    //open user cards
    var userNav = new linkActiveClass('header .card-nav');
    userNav.activeState('header__button--active', 'user-menu__card-active');

    closeUserCards();

    var searchBar = new linkActiveClass('header #header-search');
    searchBar.activeState('header__button--active', 'search__bar--active');

    //menu search bar
    submitSearch();

    window.addEventListener('scroll', function () {

        //console.log(window.innerHeight);
        var olark = document.getElementById('habla_window_div'),
            olarkWrapper = document.getElementById('habla_beta_container_do_not_rely_on_div_classes_or_names');
        if (page('habla_window_div')) {
            if (olarkWrapper.getBoundingClientRect().top > window.innerHeight && !mobileDevice()) {
                olark.classList.remove('olarkSet');
            } else {
                olark.classList.add('olarkSet');
            }
        }
    });

    window.addEventListener('resize', function () {
        var olark = document.getElementById('habla_window_div'),
            olarkWrapper = document.getElementById('habla_beta_container_do_not_rely_on_div_classes_or_names');
        if (page('habla_window_div')) {
            if (olarkWrapper.getBoundingClientRect().top > window.innerHeight && !mobileDevice()) {
                olark.classList.remove('olarkSet');
            } else {
                olark.classList.add('olarkSet');
            }
        }
    });
};