import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;
class Radios extends Component {
	constructor(props, context) {
		super(props, context);
	}
	handleChange = (e) => {
		this.props.onChange && this.props.onChange(e.target.value, e);
	}
	render() {
		const { placeholder, label, dataSource, value, item } = this.props;
		return (
			<div className="_flex" >
				<label className="_text-right _dp-ib _pd-r-10 _1of4" > {label} </label>
				<RadioGroup 
					name="radiogroup" 
					value={value} 
					className="_width-100p _flex _fw"
					onChange={this.handleChange}
				>
					{
						dataSource.map((_item, index) => {
							const { value: _value, label: _label } = _item;
							return (
								<Radio
									key={index}
									value={_value} 
									className="_1of4"
								>{_label}</Radio>
							);
						})
					}
				</RadioGroup>
			</div>
		);
	}
}
Radios.propTypes = {
};
export default Radios;