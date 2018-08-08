import React, { Component, PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Pop, Inputs, Sliders, Colors, Radios, Links } from '../Common/root';
class Editor extends PureComponent {
	constructor(props, context) {
		super(props, context);
	}
	handleChange = (value, key, defaultValue) => {
		const { item, itemData } = this.props; 
		this.props.onEdited(item, { ...itemData, [key]: value || defaultValue });
	}

	render() {
		const { item, itemData, onEdited, modules } = this.props;
		const { list = [], m_tb, title, bg_color, color } = itemData || {};
		return (
			<Pop title="公告" className="v-seme-notice">
				<Fragment>
					<Sliders 
						value={m_tb} 
						onChange={value => this.handleChange(value, 'm_tb', 0)} 
					/>
					<Inputs 
						label="公告内容:" 
						placeholder="请输入公告内容"
						onChange={value => this.handleChange(value, 'title', '')}
						value={title}
					/>
					<Colors 
						label="背景颜色:" 
						onChange={value => this.handleChange(value, 'bg_color', '')}
						value={bg_color}
					/>
					<Colors 
						label="文字颜色:" 
						onChange={value => this.handleChange(value, 'color', '')}
						value={color}
					/>
				</Fragment>
			</Pop>
		);
	}
}
Editor.propTypes = {
};
export default Editor;