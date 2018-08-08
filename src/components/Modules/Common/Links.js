import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Input, message } from 'antd';
import Colors from './Colors';
import Popovers from './Popovers';
import { PGallery } from 'wya-rc';
class Links extends Component {
	constructor(props, context) {
		super(props, context);
	}
	handleChange = (e, key, index) => {
		let { list } = this.props;
		list = list.map((item, _index) => {
			if (_index == index) {
				return {
					...item,
					[key]: typeof e === 'object' ? e.target.value : e
				};
			}
			return item;
		});
		this.props.onChange && this.props.onChange([...list]);
	}
	handleChangeImg = (e, index) => {
		PGallery.popup({
			max: 1
		}).then((res = []) => {
			this.handleChange(res[0].file_url, 'img', index);
		}).catch((e) => {
			console.log(e);
		});

	}
	handleAdd = () => {
		const { item, list, modules } = this.props;
		const type = item.split('#')[0];
		const listItem = modules[type].listItem || {};
		this.props.onChange && this.props.onChange([...list, listItem]);
	}
	handleDel = (e, index) => {
		let { list } = this.props;
		if (list.length === 1) {
			message.error('至少有一个导航');
			return;
		}
		list = list.filter((item, _index) => _index != index);
		this.props.onChange && this.props.onChange([...list]);
	}
	render() {
		const { item, list = [], max, min, placeholder, type, dHide, nameHide } = this.props;
		return (
			<div className="_content-list">
				{
					list.map((_item, index) => {
						const { img, url, title, bg_color, color } = _item;
						return (
							<Fragment key={`${index}_${item}`}>
								<div className="_item _flex _mg-t-20 _ai-c _pos-re _pd-tb-10 _pd-lr-20">
									{
										!dHide && (
											<span
												className="_del"
												onClick={e => this.handleDel(e, index)}
											>&#10005;</span>
										)
									}

									{
										type !== "link" && (
											<div
												className="_bg"
												style={{ backgroundImage: `url("${img}!4-4")` }}
												onClick={e => this.handleChangeImg(e, index)}
											/>
										)
									}
									<div className="_lh-24 _text-right">
										{
											!nameHide && (
												<div className="_flex _jc-fs">
													<label className="_1of4"> 导航名称： </label>
													<Input
														placeholder={placeholder || ''}
														style={{ width: 260 }}
														value={title}
														onChange={e => this.handleChange(e, 'title', index)}
													/>
												</div>
											)
										}
										<Popovers
											url={url}
											title={title}
											onChangeUrl={e => this.handleChange(e, 'url', index)}
											onChangeTitle={e => this.handleChange(e, 'title', index)}
										/>
									</div>
								</div>
								<div style={{ background: "#ededf4" }}>
									{
										bg_color &&
											<Colors
												label="背景颜色:"
												onChange={value => this.handleChange(value, 'bg_color', index)}
												value={bg_color}
											/>
									}
									{
										color &&
											<Colors
												label="文字颜色:"
												onChange={value => this.handleChange(value, 'color', index)}
												value={color}
											/>
									}
								</div>

							</Fragment>
						);
					})
				}
				{
					(list.length < max && !dHide) &&
						<div
							className="_add _mg-tb-10 _lh-32 _text-center"
							onClick={this.handleAdd}
						> + </div>
				}
			</div>
		);
	}
}
Links.propTypes = {
};
export default Links;
