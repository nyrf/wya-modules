import React, { Component, Fragment } from 'react';
import { Button, message } from 'antd';
import { DebounceClick } from 'wya-rc';
import Preview from './Preview';
class Save extends Component {
	constructor(props, context) {
		super(props, context);
	}
	handleSave = () => {

		let diy = [];
		const { editing, itemArr, itemObj, rootConfig } = this.props;

		diy = itemArr.map((item, index) => {
			const type = item.split('#')[0];
			return {
				type,
				content: itemObj[item] 
			};
		});
		// 验证数据 to do 
		for (let i = 0; i < diy.length; i++) {
			let item = diy[i];
			let type = item.type;
			if (rootConfig[type].dataValidity) {
				let error = rootConfig[type].dataValidity(item.content || {});
				if (error) {
					message.error(`第${i + 1}个 - ${error.error}`);
					return;
				}
			}
			
		}
		this.props.onSave(diy);
	}
	handlePreview = () => {
		const { itemArr, itemObj, rootConfig } = this.props;
		Preview.popup({
			itemArr,
			itemObj,
			rootConfig
		}).then(() => {

		}).catch((e) => {
			console.log(e);
		});
	}
	render() {
		const { editing, itemArr, itemObj } = this.props;
		return (
			<div style={{ marginLeft: !!editing ? -162 : 0, display: `inherit` }}>
				<DebounceClick tag={Button} type="primary" onClick={this.handleSave}>保存</DebounceClick>
				<DebounceClick
					tag={Button}
					type="primary"
					style={{ marginLeft: `5px` }}
					onClick={this.handlePreview}
				>预览</DebounceClick>
			</div>
		);
	}
}
export default Save;
