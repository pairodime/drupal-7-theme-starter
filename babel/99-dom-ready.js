if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

jQuery.conflict();
jQuery(document).ready(function($){
    // DOC is loaded - lets fire
    myFuncEMCA6();
    oldSchool();
	const documentState = setInterval(() => {
        switch (document.readyState) {
            case 'loading':
                console.log('document loading');
            break;
            case 'interactive':
                console.log('document ready, but media still loading');
            break;
            case 'complete':
                clearInterval(documentState);
                // ONly used for JS that needs all assets of page loaded first
            break;
        }	
    }, 100);
});