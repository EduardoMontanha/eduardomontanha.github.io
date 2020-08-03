import React, { Component } from 'react';
import './Options.scss';

class Options extends Component {
  render() {
    return (
        <div className="Options">
            <div className="option__container">
                <div className="option__block">
                    <div className="type">Amount</div>
                    <div className="value">$1</div>
                </div>
                <div className="option__ctrl">
                    <i className="fa fa-plus fa-1" aria-hidden="true"></i>
                    <i className="fa fa-minus fa-1" aria-hidden="true"></i>
                </div>
            </div>
            <div className="option__container">
                <div className="option__block">
                    <div className="type">Time</div>
                    <div className="value">14:27</div>
                </div>
                <div className="option__ctrl">
                    <i className="fa fa-plus fa-1" aria-hidden="true"></i>
                    <i className="fa fa-minus fa-1" aria-hidden="true"></i>
                </div>
            </div>
            <div className="benefit__text">
                Earnings <span style={{fontWeight: 'bold', color: 'white'}}>+82%</span>
            </div>
            <div className="benefit__value">
                $1.82
            </div>
            <div className="majority__opinion">Majority opinion</div>
            <div className="red__bar">
                <div className="green__bar" style={{width: 43 + '%'}}></div>
            </div>
            <div className="progress">
                <div className="green__text">43%</div>
                <div className="red__text">57%</div>
            </div>
            <div className="call__button">
                <i className="fa fa-arrow-up" aria-hidden="true"></i>
            </div>
            <div className="put__button">
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
            </div>
        </div>
    )
  }
}

export default Options;