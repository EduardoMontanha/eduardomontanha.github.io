import React from 'react';

import { LanguageContext } from '../../context/LanguageContext';
import './Header.css';
import home from './images/home.png';
import latoken from './images/latoken.png';

class Header extends React.Component {

    static contextType = LanguageContext;

    render() {
        let headerData = this.context.header;

        return (
            <header>
                <div className="container">
                    <div className="content-data">
                        <h1>
                            Digital Money.<br/>
                            <span>{headerData.slogan}</span>
                        </h1>

                        <p>{headerData.description}</p>

                        <div className="progress-bar"></div>

                        <div className="purchase-token-btn">
                            <a target="_blank" href="https://wallet.thedigitalmoney.io/#!/register/" rel="noopener noreferrer">
                                {headerData.buyCta}
                            </a>
                            
                            <img src={latoken} alt="Latoken partnership logo"/>
                        </div>
                    </div>

                    <div className="content-image">
                        <img src={home} alt={headerData.imageDescription}/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;