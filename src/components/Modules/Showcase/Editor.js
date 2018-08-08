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
		const { list = [], m_tb, layout, style } = itemData || {};
		return (
			<Pop title="橱窗" className="v-seme-showcase">
				<Sliders 
					value={m_tb} 
					onChange={value => this.handleChange(value, 'm_tb', 0)} 
				/>
				<Radios 
					label="样式： "
					onChange={value => this.handleChange(value, 'style', '')}
					value={style}
					dataSource={[
						{
							value: 1,
							label: "两列显示"
						},
						{
							value: 2,
							label: "三列显示"
						}
					]}
				/>
				<Links
					max={3}
					dHide={true}
					item={item}
					list={list}
					onChange={value => this.handleChange(value, 'list', {})}
					placeholder={""}
				/>
			</Pop>
		);
	}
}
Editor.propTypes = {
};
export default Editor;