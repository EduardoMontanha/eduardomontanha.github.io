
import React, { Component } from "react";
import PropTypes from "prop-types";

import { format } from "d3-format";
import { timeFormat } from "d3-time-format";

import { ChartCanvas, Chart, ZoomButtons } from "react-stockcharts";
import {
	CandlestickSeries,
} from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import {
	CrossHairCursor,
	EdgeIndicator,
	MouseCoordinateX,
	MouseCoordinateY,
} from "react-stockcharts/lib/coordinates";

import { discontinuousTimeScaleProvider } from "react-stockcharts/lib/scale";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last } from "react-stockcharts/lib/utils";

class SChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suffix: 1
        }
        this.handleReset = this.handleReset.bind(this);
    }
    
	handleReset() {
		this.setState({
			suffix: this.state.suffix + 1
		});
    }
    
	render() {        
		const margin = { left: 0, right: 50, top: 0, bottom: 50 };
		const height = window.innerHeight - 70;
		const { type, data: initialData, width, ratio } = this.props;

		const xScaleProvider = discontinuousTimeScaleProvider
			.inputDateAccessor(d => d.date);
		const {
			data,
			xScale,
			xAccessor,
			displayXAccessor,
		} = xScaleProvider(initialData);

		const start = xAccessor(last(data));
		const end = xAccessor(data[Math.max(0, data.length - 150)]);
        const xExtents = [start, end];
		return (
            <ChartCanvas 
                height={height}
                ratio={ratio}
                width={width}
                margin={margin}
                type={type}
                seriesName={`MSFT_${this.state.suffix}`}
                data={data}
                xScale={xScale}
                xAccessor={xAccessor}
                displayXAccessor={displayXAccessor}
                xExtents={xExtents}
            >

				<Chart id={1}
						yExtents={[d => [d.high, d.low]]}
						padding={{ top: 10, bottom: 20 }}>
                    <XAxis 
                        axisAt="bottom" 
                        orient="bottom" 
                        stroke="rgb(50, 50, 50)"
                        tickStroke="rgb(140, 140, 140)"
						zoomEnabled={true}
                    />
					<MouseCoordinateX
						at="bottom"
						orient="bottom"
                        displayFormat={timeFormat("%Y-%m-%d")}
                        stroke="rgb(161, 178, 225)"
                        fill="rgb(161, 178, 225)"
                        textFill="#fff"
                    />
					<MouseCoordinateY
						at="right"
						orient="right"
                        displayFormat={format(".2f")}
                        stroke="rgb(161, 178, 225)"
                        fill="rgb(161, 178, 225)"
                        textFill="#fff"
                    />

                    <YAxis 
                        axisAt="right" 
                        orient="right" 
                        ticks={5} 
                        stroke="rgb(50, 50, 50)"
                        tickStroke="rgb(140, 140, 140)"
						zoomEnabled={true}
                    />

                    <CandlestickSeries 
                        fill= {d => d.close > d.open ? "rgb(57, 189, 132)" : "rgb(234, 109, 111)"}
                        wickStroke= {d => d.close > d.open ? "rgb(57, 189, 132)" : "rgb(234, 109, 111)"}
                    />
                    <EdgeIndicator 
                        itemType="last" 
                        orient="right" 
                        edgeAt="right"
						yAccessor={d => d.close} 
                        fill= {d => d.close > d.open ? "rgb(57, 189, 132)" : "rgb(234, 109, 111)"}
                        lineStroke={d => d.close > d.open ? "rgb(57, 189, 132)" : "rgb(234, 109, 111)"}
                        //stroke=""
                        lineStrokeDasharray="Solid"
                    />
                    <ZoomButtons
                        onReset={this.handleReset}
                    />

				</Chart>
				<CrossHairCursor strokeDasharray="Solid" stroke="rgb(161, 178, 225)"/>

			</ChartCanvas>
		);
	}
}

SChart.propTypes = {
	data: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	ratio: PropTypes.number.isRequired,
	type: PropTypes.oneOf(["svg", "hybrid"]).isRequired,
};

SChart.defaultProps = {
	type: "svg",
};

SChart = fitWidth(SChart);

export default SChart;
