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
		const { code, m_tb } = itemData || {};
		return (
			<Pop title="视频" className="v-seme-video"> 
				<Sliders 
					value={m_tb} 
					onChange={value => this.handleChange(value, 'm_tb', 0)} 
				/>
				<Inputs 
					label="视频链接:" 
					placeholder="请输入视频文件地址"
					onChange={value => this.handleChange(value, 'code', '')}
					value={code}
				/>
				{
					// <div style={{ paddingLeft: 38 }}> 
					// 	<span>https://v.qq.com/iframe/player.html?vid=</span>
					// 	<span style={{ color: 'red' }}>b00249eiunm</span>
					// 	<div>只支持腾讯视频</div>
					// </div>
				}
				<div style={{ paddingLeft: 38 }}>不支持视频上传，只支持视频文件地址</div>
			</Pop>
		);
	}
}
Editor.propTypes = {
};
export default Editor;