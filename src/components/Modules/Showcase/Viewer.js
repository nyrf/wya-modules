import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router';

class Showcase extends PureComponent {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const {
			item,
			itemData,
			width = 320
		} = this.props;
		const {
			list = [],
			m_tb,
			style
		} = itemData || {};

		const caseStyle1 = {
			width: width / 2,
			height: width,
			float: 'left'
		};
		const caseStyle2 = {
			width: width / 100 * 50,
			height: width,
		};
		return (
			<div className="v-se-modules _pe-none v-sem-showcase" style={{ margin: `${m_tb}px 0` }}>
				{style && style == 1
					? (
						<div className={classnames( `_style-${style}`, '_flex _row')}>
							<Link className="_case-1" style={caseStyle1} to={list[0].url}>
								<img className="_img" src={`${list[0].img}!2-1`} />
								{list[0].title && <span className="_oneline _text">{list[0].title}</span>}
							</Link>
							<div style={caseStyle2} className="_row">
								<Link className="_case-2" to={list[1].url} style={{ float: 'left' }}>
									<img className="_img" src={`${list[1].img}!2-2`}/>
									{list[1].title && <span className="_oneline _text">{list[1].title}</span>}
								</Link>
								<Link className="_case-3" to={list[2].url} style={{ float: 'left' }}>
									<img className="_img" src={`${list[2].img}!2-2`}/>
									{list[2].title && <span className="_oneline _text">{list[2].title}</span>}
								</Link>
							</div>
						</div>
					)
					: (
						<div className={classnames( `_style-${style}`, '_row', )}>
							{
								list.map((item, index) => {
									let { title, img, url } = item;
									return (
										<div key = {index} style={{ width: `33.33%`, float: 'left' }} className="_pos-re">
											<Link to={url} style={{ display: "block" }}>
												<img className="_img" src={`${img}!4-4`} />
												{title && <span className="_oneline _text _text-center">{title}</span>}
											</Link>
										</div>
									);
								})
							}
						</div>
					)
				}
			</div>
		);
	}
}
Showcase.propTypes = {

};
export default Showcase;
