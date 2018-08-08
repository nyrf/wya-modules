import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Pop, Inputs, Sliders, Colors, Radios, Links } from '../Common/root';
class Editor extends Component {
	constructor(props, context) {
		super(props, context);
	}
	handleChange = (value, key, defaultValue) => {
		const { item, itemData } = this.props; 
		this.props.onEdited(item, { ...itemData, [key]: value || defaultValue });
	}

	render() {
		const { item, itemData, onEdited } = this.props;
		const { list = [], m_tb, tel, name, bg_color, color } = itemData || {};
		return (
			<Pop title="联系人" className="v-seme-tel">
				<Sliders 
					value={m_tb} 
					onChange={value => this.handleChange(value, 'm_tb', 0)} 
				/>
				<Inputs 
					label="联系电话:" 
					placeholder="请输入联系电话"
					onChange={value => this.handleChange(value, 'tel', '')}
					value={tel}
				/>
				<Inputs 
					label="联系人姓名:" 
					placeholder="请输入联系人姓名"
					onChange={value => this.handleChange(value, 'name', '')}
					value={name}
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
			</Pop>
		);
	}
}
Editor.propTypes = {
};
export default Editor;