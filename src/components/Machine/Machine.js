import React from 'react';

import { LanguageContext } from '../../context/LanguageContext';
import './Machine.css';
import image from './images/machine.png';

class Machine extends React.Component {

    static contextType = LanguageContext;

    render() {
        let machineData = this.context.machine;

        return(
            <section id="machine">
                <div className="container">
                    <div className="content-title">
                        <h2>{machineData.title}</h2>

                        <div className="separator">
                            <div className="large"></div>
                            <div className="medium"></div>
                            <div className="small"></div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="content-data">
                            <h3>{machineData.textTitle}</h3>
                            <p>{machineData.text1}</p>
                            <p>{machineData.text2}</p>
                        </div>

                        <div className="content-image">
                            <img src={image} alt={machineData.imageDescription}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Machine;