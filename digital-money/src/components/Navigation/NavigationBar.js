import React from 'react';
import './NavigationBar.css';

import logo from './images/logo.png';
import NavigationLinks from './NavigationLinks';

/**
 * Behaviors
 */
function openMenu() {
    //Show/hide menu
    document.querySelector(".nav-links").classList.toggle("show");
    //Change nav style
    document.querySelector("nav").classList.toggle("active");
}

/**
 * Components
 */
const PageLogo = () => {

    return (
        <a href="index.html" id="logo">
            <img src={logo} alt="Logo" />
        </a>
    );
}

class NavigationBar extends React.Component {

    render() {
        return (
            <nav>
                <div className="container">
                    <PageLogo />

                    <button className="nav-bar-toggler" onClick={openMenu}>
                        <div id="burger-icon">
                            <div className="bar bar1"></div>
                            <div className="bar bar2"></div>
                            <div className="bar bar3"></div>
                        </div>
                    </button>
                    
                    <NavigationLinks />
                </div>
            </nav>
        );
    }
}

export default NavigationBar;