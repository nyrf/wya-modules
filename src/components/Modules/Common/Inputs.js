import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
class Inputs extends Component {
	constructor(props, context) {
		super(props, context);
	}
	handleChange = (e) => {
		this.props.onChange && this.props.onChange(e.target.value, e);
	}
	render() {
		const { placeholder, label, value } = this.props;
		return (
			<div className="_flex">
				<label className="_1of4 _pd-r-10 _text-right _lh-32"> {label} </label>
				<Input 
					style={{ width: 260 }} 
					placeholder={placeholder} 
					onChange={this.handleChange}
					value={value || ''}
				/>
			</div>
		);
	}
}
Inputs.propTypes = {
};
export default Inputs;