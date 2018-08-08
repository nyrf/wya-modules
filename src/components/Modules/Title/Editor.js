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
		const { title, m_tb, bg_color, color, style, layout } = itemData || {};
		return (
			<Pop title="标题" className="v-seme-title"> 
				<Fragment>
					<Sliders 
						value={m_tb} 
						onChange={value => this.handleChange(value, 'm_tb', 0)} 
					/>
					<Inputs 
						label="标题内容:" 
						placeholder="请输入标题内容"
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
					<Radios 
						label="显示类型:"
						onChange={value => this.handleChange(value, 'style', '')}
						value={style}
						dataSource={[
							{
								value: 1,
								label: "样式一"
							},
							{
								value: 2,
								label: "样式二"
							},
							{
								value: 3,
								label: "样式三"
							}
						]}
					/>
					<Radios 
						label="显示位置:"
						onChange={value => this.handleChange(value, 'layout', '')}
						value={layout}
						dataSource={[
							{
								value: `left`,
								label: "居左"
							},
							{
								value: `center`,
								label: "居中"
							},
							{
								value: `right`,
								label: "居右"
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