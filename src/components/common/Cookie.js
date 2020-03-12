import React from 'react';

class Cookie extends React.Component {

    static setCookie(name, value, days) {

        let expires = "";

        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }

        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    static getCookie(name) {
        let nameEQ = name + "=",
            cookiesArray = document.cookie.split(';');

        for (let i = 0; i < cookiesArray.length; i++) {
            let cookie = cookiesArray[i];

            while (cookie.charAt(0) === ' ')
                cookie = cookie.substring(1, cookie.length);

            if (cookie.indexOf(nameEQ) === 0)
                return cookie.substring(nameEQ.length, cookie.length);
        }

        return null;
    }

    static eraseCookie(name) {
        document.cookie = name+'=; Max-Age=-99999999;';
    }
}

export default Cookie;