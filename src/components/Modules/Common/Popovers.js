import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Popover, Button, Input, Select } from 'antd';
const Option = Select.Option;
const listDefault = [
	{
		url: '',
		title: `自定义链接`,
		type: 2
	}
];

class Popovers extends Component {
	constructor(props, context) {
		super(props, context);
		const { title, url } = this.props;
		this.state = {
			visible: false,
			link: false,
			value: url || '/'
		};
	}
	handleVisibleChange = (visible) => {
		this.setState({
			visible
		});
	}
	handleClick = async (e, item, index) => {
		let goods = [];
		let lottery = [];

		try {
			this.setState({
				visible: false,
				link: item.type === 2
			});
			if (item.type == 2) { // 自定义链接
				this.props.onChangeUrl('');
				return;
			}
			this.props.onChangeUrl(item.url);
		} catch (e) {
			console.log(e);
		}

	}
	handleChangeInput = (e) => {
		this.setState({
			value: e.target.value,
			link: true
		});
		this.props.onChangeUrl(e.target.value);
	}
	renderContent = () => {
		return (
			<div className="wya-me-modules">
				<div className="_flex _fd-c">
					{
						listDefault.map((item, index) => {
							return (
								<div
									className="_col "
									key={index}
									style={{ color: '#0083ed',  cursor: 'pointer' }}
									onClick={e => this.handleClick(e, item, index)}
								>{item.title}</div>
							);
						})
					}
				</div>
			</div>
		);
	}
	renderUrlName = () => {
		const { title } = this.props;
		const { link, value } = this.state;
		let obj = listDefault.filter(item => this.props.url.includes(item.url))[0] || {};
		if (obj.type == 2 || link) {
			return (
				<Input
					value={value}
					onChange={this.handleChangeInput}
					style={{ width: 180 }}
				/>
			);
		} else if (obj.type == 1) {
			return obj.title
				? (
					<Button
						type="primary"
						size="small"
						style={{ margin: "5px 5px 5px 0" }}
					>{obj.type == 1 ? `商品：${title.length > 5 ? title.substring(0, 5) + '...' : title}` : obj.title}</Button>

				)
				: '';
		} else if (obj.type == 3) {
			return obj.title
				? (
					<Button
						type="primary"
						size="small"
						style={{ margin: "5px 5px 5px 0" }}
					>{obj.type == 3 ? `抽奖：${title.length > 5 ? title.substring(0, 5) + '...' : title}` : obj.title}</Button>

				)
				: '';
		}

	}
	render() {
		const { title, url } = this.props;
		const { link, value } = this.state;
		return (
			<div className="_flex">
				<label className="_1of4"> 链接到： </label>
				<Popover
					content={this.renderContent()}
					trigger="click"
					visible={this.state.visible}
					onVisibleChange={this.handleVisibleChange}
				>
					<div style={{ width: 260, textAlign: 'left' }} >
						{this.renderUrlName()}
						<span className="_choose"> 选择 </span>
					</div>
				</Popover>
			</div>
		);
	}
}
Popovers.propTypes = {
};
export default Popovers;
