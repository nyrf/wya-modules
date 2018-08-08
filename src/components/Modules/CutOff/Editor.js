import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Pop, Inputs, Sliders, Colors, Radios } from '../Common/root';

class Editor extends PureComponent {
	constructor(props, context) {
		super(props, context);
	}
	handleChange = (value, key, defaultValue) => {
		const { item, itemData } = this.props; 
		this.props.onEdited(item, { ...itemData, [key]: value || defaultValue });
	}
	render() {
		const { item, itemData, onEdited } = this.props;
		const { m_tb, color, style } = itemData || {};
		return (
			<Pop title="分割线" className="v-seme-space"> 
				<Sliders 
					value={m_tb} 
					onChange={value => this.handleChange(value, 'm_tb', 0)} 
				/>
				<Radios 
					label="样式："
					onChange={value => this.handleChange(value, 'style', '')}
					value={style}
					dataSource={[
						{
							value: 'solid',
							label: '直线'
						},
						{
							value: 'dashed',
							label: '虚线一'
						},
						{
							value: 'dotted',
							label: '虚线二'
						}
					]}
				/>
				<Colors 
					label="线颜色:" 
					onChange={value => this.handleChange(value, 'color', '')}
					value={color}
				/>
			</Pop>
		);
	}
}
Editor.propTypes = {
};
export default Editor;