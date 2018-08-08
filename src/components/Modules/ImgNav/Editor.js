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
			<Pop title="图片导航" className="v-seme-img-nav">
				<Fragment>
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
								label: "固定大小"
							},
							{
								value: 2,
								label: "根据图片适应"
							}
						]}
					/>
					<Radios 
						label="布局："
						onChange={value => this.handleChange(value, 'layout', '')}
						value={layout}
						dataSource={[
							{
								value: 1,
								label: "布局一"
							},
							{
								value: 2,
								label: "布局二"
							}
						]}
					/>
					<Links
						max={4}
						item={item}
						list={list}
						onChange={value => this.handleChange(value, 'list', {})}
						placeholder={""}
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