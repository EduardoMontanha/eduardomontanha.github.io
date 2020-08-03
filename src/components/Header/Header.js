import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
        <div className="Header">
            <div className="header__left">
                <div className="nav__icon">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
                <div className="title__text">Binary Option</div>
                <div className="make__center">
                    <div className="add__button">
                        <i className="fa fa-plus fa-1" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="make__center">
                    <div className="asset__cotainer">
                        <div className="asset__selected">
                            <i className="fa fa-angle-down asset__icon" aria-hidden="true"></i>
                            <div className="asset__type">BTC/USD</div>
                        </div>
                        <div className="asset__percent">82%</div>
                    </div>
                </div>
            </div>
            <div className="header__right">
                <div className="make__center">
                    <div className="demo__account">
                        <i className="fa fa-refresh icon" aria-hidden="true"></i>
                        <div className="account__block">
                            <div className="account__type">Demo account</div>
                            <div className="account__balance">$999.00</div>
                        </div>
                        <i className="fa fa-caret-down icon" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="make__center">
                    <div className="deposit__button">
                        <i className="fa fa-credit-card" aria-hidden="true">{" Deposit"}</i>                        
                    </div>
                </div>
                <div className="make__center">
                    <div className="user__avatar">
                        M
                        <div className="notification">1</div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Header;