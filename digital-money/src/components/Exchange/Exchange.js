import React from 'react';

import { LanguageContext } from '../../context/LanguageContext';
import './Exchange.css';
import iconArrows from './images/icon-arrow.png';

class Exchange extends React.Component {

    static contextType = LanguageContext;

    render() {
        let exchangeData = this.context.exchange;

        return(
            <aside id="exchange-listing">
                <div className="container">
                    <div>
                        <img src={iconArrows} alt="Exchange Latoken"/>
                        <p>{exchangeData.label1.text}</p>
                    </div>
                    <div>
                        <h3>{exchangeData.label2.title}</h3>
                        <p>{exchangeData.label2.text}</p>
                    </div>
                    <div>
                        <h3>{exchangeData.label3.title}</h3>
                        <p>{exchangeData.label3.text}</p>
                    </div>
                    <div>
                        <h3>{exchangeData.label4.title}</h3>
                        <p>{exchangeData.label4.text}</p>
                    </div>
                </div>
            </aside>
        );
    }
}

export default Exchange;