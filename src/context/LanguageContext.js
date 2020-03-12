import React from 'react';
import Cookie from '../components/common/Cookie';

let languagesData, //All language data that will be passed
    language = navigator.language.slice(0, 2), //Language that will be shown to the customer
    langCookie = Cookie.getCookie('dmAppLanguage'); //Get cookie data.

//If there is a cookie with the preferred language
if (langCookie)
    language = langCookie;

switch (language) {
    case "en":
        languagesData = require('../assets/data/en.lang.json');
        break;

    case "es":
        languagesData = require('../assets/data/es.lang.json');
        break;

    case "it":
        languagesData = require('../assets/data/it.lang.json');
        break;

    case "pt":
        languagesData = require('../assets/data/pt.lang.json');
        break;

    default:
        console.error("The language file you're trying to access doesn't exist!");
        break;
}


//Update HTML language attribute
document.querySelector('html').setAttribute('lang', language);

export const LanguageContext = React.createContext();

class LanguageContextProvider extends React.Component {

    render() {
        return(
            <LanguageContext.Provider value={languagesData}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

export default LanguageContextProvider;