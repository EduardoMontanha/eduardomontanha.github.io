import React from 'react';

import { LanguageContext } from '../../context/LanguageContext';
import './Financing.css';
import image from './images/graph.png';

class Financing extends React.Component {

    static contextType = LanguageContext;

    render() {
        let financingData = this.context.financing;

        return(
            <section id="financing">
                <div className="container">
                    <div className="content-title">
                        <h2>{financingData.title}</h2>

                        <div className="separator">
                            <div className="large"></div>
                            <div className="medium"></div>
                            <div className="small"></div>
                        </div>

                        <p>{financingData.description}</p>
                    </div>

                    <div className="content">
                        <div className="content-data">
                            <h3>{financingData.textTitle}</h3>

                            <ul>
                                <li><span>&#5125;</span> {financingData.infoList.item1}</li>
                                <li><span>&#5125;</span> {financingData.infoList.item2}</li>
                                <li><span>&#5125;</span> {financingData.infoList.item3}</li>
                                <li><span>&#5125;</span> {financingData.infoList.item4}</li>
                                <li><span>&#5125;</span> {financingData.infoList.item5}</li>
                                <li><span>&#5125;</span> {financingData.infoList.item6}</li>
                                <li><span>&#5125;</span> {financingData.infoList.item7}</li>
                                <li><span>&#5125;</span> {financingData.infoList.item8}</li>
                                <li><span>&#5125;</span> {financingData.infoList.item9}</li>
                            </ul>

                            <p>{financingData.simbol}: <strong>DMX</strong></p>
                            <p>{financingData.value}: <strong>U$ 1,45</strong></p>
                        </div>

                        <div className="content-image">
                            <img src={image} alt={financingData.imageDescription}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Financing;