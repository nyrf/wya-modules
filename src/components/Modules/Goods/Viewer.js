import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import classnames from 'classnames';
class Goods extends PureComponent {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		const {
			item,
			itemData,
			styleObj,
			inFrame
		} = this.props;
		const {
			m_tb,
			is_show,
			list = [],
			style
		} = itemData || {};
		return (
			<div className="wya-me-modules _pe-none wya-mem-goods" style={{ margin: `${m_tb}px 0`, ...styleObj }}>
				<div className={classnames('_flex', '_fw', `_style-${style}`)}>
					{
						list.map((item, index) => {
							return (
								<Item  
									key={index}
									style={Number(style)}
									is_show={is_show}
									data={item}
								/>
							);
						})
					}
					{list.length === 0 && inFrame && <div className="_flex-cc">点我添加商品</div>}
				</div>
			</div>
		);
	}
}
Goods.propTypes = {

};
export default Goods;