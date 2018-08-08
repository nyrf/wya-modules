import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Icon } from 'antd';
const cartStyle = {
	height: '25px',
	position: 'absolute',
	bottom: "-5px",
	right: "10px",
	width: '25px'
};
class Item extends PureComponent {
	constructor(props, context) {
		super(props, context);
		this.state = { isShow: false };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
	}

	render() {
		const { data, actions, is_show, style } = this.props;
		const {
			product_id,
			product_name,
			cover_img,
			sale_price,
			sale_num,
			seckill,
			freesend,
			bargain
		} = data || {};
		switch (style) {
			case 2 :
				return (
					<div className="_item-container">
						<Link to={'/shop/goods/' + product_id} className="_width-100p">
							<img className="_img" src={`${cover_img}!2-2`}/>
							<div className="_title _twoline">{is_show == 1 ? product_name : null}</div>
						</Link>
						<div className="_price">
							<span>￥{sale_price}</span>
							<div className="_pos-re">
								<Icon type="shopping-cart" className="_cart-icon" />
							</div>
						</div>
						<div className="_active">
							<b className="_sale-mun">销量:{sale_num}</b>
							{seckill && (<span name="seckill">秒杀</span>)}
							{freesend && (<span name="freesend">包邮</span>)}
							{bargain && (<span name="bargain">砍价</span>)}
						</div>
					</div>
				);
			case 1 :
				return (
					<div className="_list">
						<Link to={'/shop/goods/' + product_id} style={{ display: `block` }}>
							<img className="_img" src={`${cover_img}!1-1`} style={{ height: "100%", width: "100%" }}/>
							<div className="_title _twoline">{is_show == 1 ? product_name : null}</div>
						</Link>
						<div className="_active">
							{seckill && <span name="seckill">秒杀</span>}
							{freesend && <span name="freesend">包邮</span>}
							{bargain && <span name="bargain">砍价</span>}
						</div>
						<div className="_price _flex _jc-sb">
							<span>￥{sale_price}</span>
							<b className="_sale-mun">销量:{sale_num}</b>
							<div style={cartStyle}>
								<Icon type="shopping-cart" className="_cart-icon" />
							</div>
						</div>
					</div>
				);
			case 3 :
				return (
					<div className="_list _flex">
						<div className="_left">
							<Link to={'/shop/goods/' + product_id}>
								<img className="_img" src={`${cover_img}!4-4`}/>
							</Link>
						</div>
						<div className="_right">
							<Link to={'/shop/goods/' + product_id}>
								<div className="_title _twoline">{is_show == 1 ? product_name : null}</div>
								<div className="_active _nowrap" style={{ minHeight: 20 }}>
									{seckill && <span name="seckill">秒杀</span>}
									{freesend && <span name="freesend">包邮</span>}
									{bargain && <span name="bargain">砍价</span>}
								</div>
							</Link>
							<div className="_price _flex _jc-sb _ai-c">
								<span>￥{sale_price}</span>
								<b className="_sale-mun _text-right">销量:{sale_num}</b>
								<div style={cartStyle}>
									<Icon type="shopping-cart" className="_cart-icon" />
								</div>
							</div>
						</div>
					</div>
				);
			default:
				return null;
		}
	}
}
Item.propTypes = {};
export default Item;
