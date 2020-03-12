import React from 'react';

import { LanguageContext } from '../../context/LanguageContext';
import './Card.css';
import image from './images/card.png';

class Card extends React.Component {

    static contextType = LanguageContext;

    render() {
        let cardData = this.context.card;

        return(
            <section id="card">
                <div className="container">
                    <div className="content-title">
                        <h2>{cardData.title}</h2>

                        <div className="separator">
                            <div className="large"></div>
                            <div className="medium"></div>
                            <div className="small"></div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="content-data">
                            <h3>{cardData.textTitle}</h3>
                            <p>{cardData.text1}</p>
                            <p>{cardData.text2}</p>
                            <p>{cardData.text3}</p>
                        </div>

                        <div className="content-image">
                            <img src={image} alt={cardData.imageDescription}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Card;