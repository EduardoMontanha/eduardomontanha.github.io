import React, { Component } from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
import { getData } from './utils';

class StockChart extends Component {
	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<Chart type="hybrid" data={this.state.data}/>
		)
	}
}

export default StockChart;