import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router';
class ImgNav extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const {
			item,
			itemData,
		} = this.props;
		const {
			is_show,
			m_tb,
			list = [],
			style,
			layout
		} = itemData || {};
		const isAuto = layout == 1;
		const liWidth = (isAuto && list.length > 0) ? { width: (100 / list.length + '%') } : {};
		return (
			<div className="wya-me-modules _pe-none wya-mem-img-nav wya-me-reset" style={{ margin: `${m_tb}px 0` }}>
				<ul
					className={
						classnames(
							'_flex',
							'_jc-sb',
							'_fw',
							`_layout-${layout}`,
							{ '_bg-white': layout == 1 }
						)
					}
				>
					{list.map((item, index) => {
						let {
							url,
							img,
							title
						} = item;
						return (
							<li key={index} className={`${isAuto ? '_ali' : '_li'}`} style={liWidth}>
								<Link className="_img _text-center" to={url}>
									<img src={`${img}${(style == 2) ? '!1-0' : '!2-2'}`} className="_img"/>
									{
										!!title && (
											<div
												className={`${(style == 2) ? '_auto-div' : '_div'}`}
											>{title}</div>
										)
									}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
ImgNav.propTypes = {

};
export default ImgNav;
