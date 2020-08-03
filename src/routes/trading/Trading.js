import React, { Component } from 'react';
import StockChart from '../../components/Chart';
import Panel      from '../../components/Panel';
import Options    from '../../components/Options';
import './Trading.scss';

class Trading extends Component {
  render() {
    return (
        <div className="Trading">
          <Panel/>
          <div className="chart__style">
            <StockChart/>
          </div>
          <Options/>
        </div>
    )
  }
}

export default Trading;