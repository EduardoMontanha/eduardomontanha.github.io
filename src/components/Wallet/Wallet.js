import React from 'react';

import { LanguageContext } from '../../context/LanguageContext';
import './Wallet.css';
import image from './images/wallet.png';

class Wallet extends React.Component {

    static contextType = LanguageContext;

    render() {
        let walletData = this.context.wallet;

        return(
            <section id="wallet">
                <div className="container">
                    <div className="content-title">
                        <h2>{walletData.title}</h2>

                        <div className="separator">
                            <div className="large"></div>
                            <div className="medium"></div>
                            <div className="small"></div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="content-data">
                            <p>{walletData.text1}</p>

                            <p>{walletData.text2}</p>

                            <p>{walletData.text3}</p>
                        </div>

                        <div className="content-image">
                            <img src={image} alt={walletData.imageDescription}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Wallet;