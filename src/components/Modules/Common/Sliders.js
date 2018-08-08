import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Slider } from 'antd';
class Sliders extends Component {
	constructor(props, context) {
		super(props, context);
	}
	handleChange = (value) => {
		// let value = typeof e === 'object' ? e.target.value : e;
		this.props.onChange && this.props.onChange(value);
	}
	render() {
		const { value } = this.props;
		return (
			<div className="_flex">
				<div className="_1of4 _pd-r-10 _text-right _lh-32">上下边距{value}px:</div>
				<Slider 
					style={{ width: 260 }}
					max={99}
					value={value} 
					onChange={this.handleChange} 
				/>
			</div>
		);
	}
}
Sliders.propTypes = {
};
export default Sliders;