import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router';
class TopNav extends PureComponent {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const {
			item,
			itemData
		} = this.props;
		const {
			list = [],
			style,
			m_tb
		} = itemData || {};
		return (
			<div className="wya-me-modules _pe-none wya-mem-top-nav" style={{ margin: `${m_tb}px 0`, textAlign: 'center' }}>
				<ul
					className={
						classnames(
							"_flex",
							"_jc-sb",
							"_ul",
							`_style-${style}`
						)
					}
				>
					{
						list.map((item, index) => {
							let {
								bg_color,
								color,
								title,
								url,
							} = item;
							let styleCss = {
								background: bg_color,
								height: `40px`,
								lineHeight: `40px`,
								width: 100 / list.length + '%',
								color: color,
							};
							return (
								<li key={index} style={styleCss} className="_li">
									<Link to={url}>
										<div>
											<div className="_oneline" style={{ color: color }}>{title}</div>
										</div>
									</Link>
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
}
TopNav.propTypes = {

};
export default TopNav;
