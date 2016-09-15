/**
    function (){} is not the same as =()=>{}
**/


/** detect if mobile device
*** usage
if(mobileDevice()){
    // your code
}
***/
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
 
//**notify user - params (title, body, icon)
*** usage
notify('myTitle', 'This is a message', '../images/yourImage.png');
***/
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

/** if current page
*** usage
if(page('elementID')){
    // your code
}
***/
const page = (id) => {
    if (document.contains(document.getElementById(id))) {
        return true;
    } else {
        return false;
    }
}
/** apply element styles
*** usage
myStyles = {
    'color' : 'red',
    'background-color' : 'blue'
}
applyStyle('#element', myStyles)
***/
const applyStyle = (element, property) => {
    let el = document.querySelectorAll(element);
    for(let i = 0; i < el.length; i++){
        for(let key in property){
            if(property.hasOwnProperty(key)){
                el[i].style[key] = property[key];
            }
        }
    }
}
