import React from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import Cookie from '../common/Cookie';

/**
 * Behaviors
 */
function smoothScroll(e) {
    e.preventDefault();

    //Show/hide menu
    document.querySelector(".nav-links").classList.toggle("show");
    //Change nav style
    document.querySelector("nav").classList.toggle("active");

    let elementId = e.target.getAttribute("href"),
        element = document.querySelector(elementId),
        elementTop = element.offsetTop;

        window.scroll({
            top: elementTop,
            left: 0,
            behavior: 'smooth'
        });
}

function toggleDropdownMenu() {
    document.querySelector(".language-selection-box").classList.toggle("show");
}

function changeLanguage(e) {
    let element = e.target;

    //If the customer clicked on the I tag (flag) it will get the parent node
    if (element.tagName === "I") {
        element = element.parentNode;
    }

    let newLanguage = element.getAttribute("href").replace("#", "");

    //Set cookie containing the new language
    Cookie.setCookie('dmAppLanguage', newLanguage, 30);
    //Refresh the page
    window.location.reload(true);
}

/**
 * Components
 */
const OtherLanguages = (props) => {
    const othersLang = props.langs.map((language, index) => 
        <a href={language.href} key={index} onClick={(e) => changeLanguage(e)}>
            &#5171;<i className={language.flag}></i>
            {language.text}
        </a>
    );

    return(
        <div className="language-selection-box">
            {othersLang}
        </div>
    );
}

class NavigationLinks extends React.Component {

    static contextType = LanguageContext;

    render() {
        let navItems = this.context.navbar,
            langSelection = navItems.langSelection;

        return (
            <div className="nav-links">
                <ul>
                    <li className="nav-item">
                        <a href="#about" onClick={(e) => smoothScroll(e)}>{navItems.about}</a>
                    </li>
                    <li className="nav-item">
                        <a href="#wallet" onClick={(e) => smoothScroll(e)}>{navItems.wallet}</a>
                    </li>
                    <li className="nav-item">
                        <a href="#machine" onClick={(e) => smoothScroll(e)}>{navItems.products}</a>
                    </li>
                    <li className="nav-item">
                        <a href="#whitepaper" onClick={(e) => smoothScroll(e)}>{navItems.whitepaper}</a>
                    </li>
                    <li className="nav-item">
                        <a href="#roadmap" onClick={(e) => smoothScroll(e)}>{navItems.roadmap}</a>
                    </li>
                    <li className="nav-item">
                        <a href="#faq" onClick={(e) => smoothScroll(e)}>{navItems.faq}</a>
                    </li>

                    <li className="nav-item">
                        <a href="#!" className="current-lang" onClick={toggleDropdownMenu}>
                            <i className={langSelection.active.flag}></i>
                            <span>{langSelection.active.text}</span>&#8744;
                        </a>

                        <OtherLanguages langs={langSelection.hidden} />
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavigationLinks;