
const mobileDevice = () => {
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(
        /webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(
        /iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(
        /BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
    } else {
        return false;
    }
}


const notify = (title, bodyText, iconImage) => {
    let options = {
        body: bodyText,
        icon: iconImage
    }
    if (!mobileDevice()) {
        if (Notification.permission === "granted") {
            let notification = new Notification(title, options);
        }
    } else {
        alert(bodyText);
    }

}

const page = (id) => {
    if (document.contains(document.getElementById(id))) {
        return true;
    } else {
        return false;
    }
}

const hasClass = (element, className) => {
	return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

const linkActiveClass = (element) =>{
	let obj = {},
		link = document.querySelectorAll(element);
	obj.clearActiveClasses = (activeClass, activeNavClass) =>{
		for(let i = 0; i < link.length; i++){
			link[i].classList.remove(activeClass);
			let navigationID = link[i].getAttribute('href');
			document.getElementById(navigationID).classList.remove(activeNavClass);
		}
	},
	obj.activeState = (activeClass, activeNavClass) =>{
		for(let i = 0; i < link.length; i++){

			link[i].addEventListener('click', (event) => {
				event.preventDefault();

				if(!hasClass(link[i], activeClass)){
					obj.clearActiveClasses(activeClass, activeNavClass);
					link[i].classList.add(activeClass);
					let navigationID = link[i].getAttribute('href');
					document.getElementById(navigationID).classList.add(activeNavClass);
				}else{
					link[i].classList.remove(activeClass);
					let navigationID = link[i].getAttribute('href');
					document.getElementById(navigationID).classList.remove(activeNavClass);
					
				}
			});
		}
	}

	return obj;
}

const closeUserCards = () =>{
	const closeCardBtn 	= document.querySelectorAll('.user-menu__card--close-btn'),
		  userNav     	= document.querySelectorAll('.card-nav'),
		  userCard 	  	= document.querySelectorAll('.user-menu__card');

	const hideAllCards = () => {
		for(let i = 0; i < userCard.length; i++){
			userCard[i].classList.remove('user-menu__card-active');
			userNav[i].classList.remove('header__button--active');
		}
	}

	for(let i = 0; i < closeCardBtn.length; i++){
		closeCardBtn[i].addEventListener('click', ()=> {
			hideAllCards();
		});
	}
}