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
	};

	render() {
		const { item, itemData, onEdited, modules } = this.props;
		const { list = [], m_tb, layout, style } = itemData || {};
		return (
			<Pop title="图片广告" className="v-seme-slide">
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
								label: "轮播显示"
							},
							{
								value: 2,
								label: "分开显示"
							}
						]}
					/>
					<Links
						max={8}
						item={item}
						list={list}
						nameHide={true}
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
