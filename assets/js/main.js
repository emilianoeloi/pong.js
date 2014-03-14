var tv;
function getTV(){
    if(!tv)
        tv = new TV();
    return tv;
}

var language;
function setLanguage(languageAcronym){
    switch(languageAcronym){
        case "es":
            language = LANGUAGES.es;
            break;
        case "en":
            language = LANGUAGES.en;
            break;
        case "pt":
            language = LANGUAGES.pt;
            break;
        default:
            language = DEFAULT_LANGUAGE;
            break;

    }
}
function getLanguage(){
    if(!language)
        language = DEFAULT_LANGUAGE;
    return language;
}

function getQRCode(id, joystick){

    var url = [];
    url.push(URL_EXPRESS);
    url.push('mb/')
    url.push(id);
    url.push('/')
    url.push(joystick);
    url.push('/')
    url.push(getLanguage().acronym);

    var qr = [];
    qr.push('<a href="');
    qr.push(url.join(''));
    qr.push('" target="_blank"><img src="https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=');
    qr.push(url.join(''));
    qr.push('?choe=UTF-8" alt="Joystick QR Code" /></a>');

    return qr.join('');

}