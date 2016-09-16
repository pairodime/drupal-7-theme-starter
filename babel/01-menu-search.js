const submitSearch = () => {
    let searchBtn       = document.querySelector('#search input[type="submit"]'),
        input           = document.querySelector('#search input[type="text"]'),
        newResults      = document.getElementById('search-results'),
        searchTimer;

    searchBtn.addEventListener('click', (event)=>{
        event.preventDefault();
        newResults.style.padding = "10px 0px";
        search(input.value);
    });
}
//search/node/hats
const search = (data) => {
    let xmlhttp         = new XMLHttpRequest(),
        newResults      = document.getElementById('search-results');

    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                let parser = new DOMParser(),
                    doc = parser.parseFromString(xmlhttp.responseText, "text/html"),
                    results = doc.getElementById('search-container').childNodes,
                    main = document.querySelectorAll('main')[0];

                for (var i = 0; i < results.length; i++) {
                    if (results[i].tagName === "FIELDSET" || results[i].tagName === "H2" || results[i].tagName === "UL") {
                        newResults.appendChild(results[i]);
                    }
                }


            } else {
                let title = "C3 Shop",
                    bodyText = "Oops! Something went wrong. Please refresh the page.",
                    iconImage = Drupal.settings.basePath + "sites/all/themes/union1617/images/union-icon.png";

                notify(title, bodyText, iconImage);
            }
        }
    };

    xmlhttp.open("GET", Drupal.settings.basePath + 'search/node/' + data, true);
    xmlhttp.send();
}