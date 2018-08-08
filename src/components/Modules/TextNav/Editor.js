import React, { Component, PureComponent } from 'react';
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
		const { item, itemData, onEdited } = this.props;
		const { list = [], m_tb } = itemData || {};
		return (
			<Pop title="文本导航" className="v-seme-text-nav">
				<Sliders 
					value={m_tb} 
					onChange={value => this.handleChange(value, 'm_tb', 0)} 
				/>
				<Links
					min={1}
					max={4}
					item={item}
					list={list}
					onChange={value => this.handleChange(value, 'list', {})}
					placeholder={""}
					type="link"
				/>
			</Pop>
		);
	}
}
Editor.propTypes = {
};
export default Editor;