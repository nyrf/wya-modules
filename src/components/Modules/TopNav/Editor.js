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
		const { list = [], m_tb, layout, style } = itemData || {};
		return (
			<Pop title="顶部导航" className="v-seme-top-nav">
				<Fragment>
					<Sliders 
						value={m_tb} 
						onChange={value => this.handleChange(value, 'm_tb', 0)} 
					/>
					<Links
						max={5}
						item={item}
						list={list}
						onChange={value => this.handleChange(value, 'list', {})}
						placeholder={""}
						type="link"
						modules={modules}
					/>
				</Fragment>
			</Pop>
		);
	}
}
Editor.propTypes = {
};
export default Editor;