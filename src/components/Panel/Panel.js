import React, { Component } from 'react';
import './Panel.scss';

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavSetting: true,
    }
  }
  onNavItemClick() {
    this.setState({
      showNavSetting: true
    })
  }
  render() {
    return (
        <div className="Panel">
          <div className="navbar">
            <div className="tab__container">
                <div className="tab__item" onClick={() => this.onNavItemClick()}>
                  <span className="iconify" data-icon="whh:clock"></span>
                </div>
                <div className="tab__item">
                  <span className="iconify" data-icon="carbon:analytics"></span>
                </div>
                <div className="tab__item">
                  <span className="iconify" data-icon="zondicons:trophy"></span>
                </div>
                <div className="tab__item">
                  <span className="iconify" data-icon="bi:calendar3-fill"></span>
                </div>
                <div className="tab__item">
                  <span className="iconify" data-icon="bi:gift-fill"></span>
                </div>
                <div className="tab__item">
                  <span className="iconify" data-icon="fa-solid:sliders-h"></span>
                </div>
            </div>
            <div className="chat">
                <span className="iconify" data-icon="fa-regular:comment-dots" data-inline="false"></span>
            </div>
          </div>
        </div>
    )
  }
}

export default Panel;