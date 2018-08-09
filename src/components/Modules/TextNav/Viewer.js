import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router';
import { Icon } from 'antd';
class TextNav extends PureComponent {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const {
			item,
			itemData
		} = this.props;
		const {
			m_tb,
			list = [],
		} = itemData || {};
		return (
			<div className="wya-me-modules _pe-none wya-mem-text-nav wya-me-reset" style={{ margin: `${m_tb}px 0` }}>
				<ul className="_text-nav _bg-white">
					{list.map((_item, index) => {
						let { url, title, color, bg_color } = _item;
						let dStyle = {
							color: color ? color : "black",
							background: bg_color ? bg_color : "white"
						};
						return (
							<Link 
								to={url} 
								key={index} 
								style={{ width: `100%`, ...dStyle }}
							>
								<li className="_flex _jc-sb _ai-c" style={{ paddingLeft: '10px' }}>
									<div className="_col2">
										<span className="_oneline">{title}</span>
									</div>
									{
										// <i className="iconfont icon-right _col2 _text-right" />
									}
									<Icon type="right" className="_col2 _text-right" />
								</li>
							</Link>
						);
					})}
				</ul> 
			</div>
		);
	}
}
TextNav.propTypes = {

};
export default TextNav;