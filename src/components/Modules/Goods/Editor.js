import React, { Component, PureComponent, Fragment } from 'react';
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
		const { item, itemData, onEdited, modules } = this.props;
		const { is_show, m_tb, style, list = [] } = itemData || {};
		return (
			<Pop title="商品" className="v-seme-goods"> 
				<Fragment>
					<Sliders 
						value={m_tb} 
						onChange={value => this.handleChange(value, 'm_tb', 0)} 
					/>
					<Radios 
						label="显示类型:"
						onChange={value => this.handleChange(value, 'style', 1)}
						value={style}
						dataSource={[
							{
								value: 2,
								label: "双列商品"
							},
							{
								value: 1,
								label: "单列商品"
							},
							{
								value: 3,
								label: "列表"
							}
						]}
					/>
					<Radios 
						label="显示标题:"
						onChange={value => this.handleChange(value, 'is_show', 0)}
						value={is_show}
						dataSource={[
							{
								value: 1,
								label: "显示"
							},
							{
								value: 0,
								label: "不显示"
							}
						]}
					/>
				</Fragment>
			</Pop>
		);
	}
}
Editor.propTypes = {
};
export default Editor;