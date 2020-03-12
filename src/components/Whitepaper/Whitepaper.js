import React from 'react';

import { LanguageContext } from '../../context/LanguageContext';
import './Whitepaper.css';
import image from './images/whitepaper.png';
//Whitepapers files
import whitepaperEn from './data/whitepaper-dmx-vs14-en.pdf';
import whitepaperIt from './data/whitepaper-dmx-vs14-it.pdf';
import whitepaperPt from './data/whitepaper-dmx-vs14-pt.pdf';


class Whitepaper extends React.Component {

    static contextType = LanguageContext;

    render() {
        let whitepaperData = this.context.whitepaper;

        return(
            <section id="whitepaper">
                <div className="container">
                    <div className="content-title">
                        <h2>{whitepaperData.title}</h2>

                        <div className="separator">
                            <div className="large"></div>
                            <div className="medium"></div>
                            <div className="small"></div>
                        </div>

                        <p>{whitepaperData.description}</p>
                    </div>

                    <div className="content">
                        <div className="content-data">
                            <h3>Whitepaper</h3>

                            <p>{whitepaperData.text}</p>

                            <div className="whitepaper-files">
                                <div>
                                    <a href={whitepaperEn} download>
                                        <i className="flag-icon flag-icon-us"></i>
                                        <span>&#8595; English</span>
                                    </a>
                                </div>

                                <div>
                                    <a href="#!" download>
                                        <i className="flag-icon flag-icon-es"></i>
                                        <span>&#8595; Español</span>
                                    </a>
                                </div>

                                <div>
                                    <a href={whitepaperIt} download>
                                        <i className="flag-icon flag-icon-it"></i>
                                        <span>&#8595; Italiano</span>
                                    </a>
                                </div>

                                <div>
                                    <a href={whitepaperPt} download>
                                        <i className="flag-icon flag-icon-br"></i>
                                        <span>&#8595; Português</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="content-image">
                            <img src={image} alt={whitepaperData.imageDescription}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Whitepaper;