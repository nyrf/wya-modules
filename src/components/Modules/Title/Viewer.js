import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
class Title extends PureComponent {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const { item, itemData } = this.props;
		const {
			m_tb,
			color,
			style,
			title,
			layout,
			bg_color
		} = itemData || {};
		const titleStyle = () => {
			switch (Number(style)){
				case 1:
					return { background: `${bg_color}` };
				case 2:
					return { borderColor: `${bg_color}` };
				case 3:
					return {};
				default:
					return { background: `${bg_color}` };
			}
		};
		return (
			<div className="v-se-modules _pe-none v-sem-title" style={{ margin: `${m_tb}px 0` }}>
				<div className="_flex">
					{style == 2 && <span style={{ width: 6, background: `${bg_color}`, marginLeft: 10 }} />}
					<div
						className={
							classnames(
								"_title",
								`_style-${style}`,
								`_text-${layout}`
							)
						}
						style={titleStyle()}
					>
						{style == 3 && <span className="_line" style={{ borderColor: `${bg_color}` }} />}
						<h3 style={{ color: `${color}` }}>{title}</h3>
					</div>
				</div>
			</div>
		);
	}
}
Title.propTypes = {

};
export default Title;
