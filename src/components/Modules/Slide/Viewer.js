/**
 * api:https://github.com/FormidableLabs/nuka-carousel
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import { Carousel } from 'antd-mobile';
import { Link } from 'react-router';
class Slide extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			current: 0,
			height: 0
		};
	}
	componentDidMount(){
		const { itemData: { style } } = this.props;
		if (style == 1) {
			const $this = findDOMNode(this.refs.carousel);
			const img = $this.getElementsByTagName('img')[0];
			img.onload = () => {
				$this.getElementsByClassName('slider-list')[0].style.height = img.height + 'px';

			};
		}
	}
	imgOnload(){
		// hack
		//
		
	}
	render() {
		const {
			item,
			itemData
		} = this.props;
		const {
			m_tb,
			style,
			list = []
		} = itemData || {};
		const settings = {
			dots: true,
			autoplay: true,
			infinite: true,
			mode: 'banner',
			selectedIndex: this.state.current,
			autoplayInterval: 2000
		};
		return (
			<div className="v-se-modules v-sem-slide _row _pe-none" style={{ margin: `${m_tb}px 0` }}>
				{style == 1
					? (
						<Carousel {...settings} ref="carousel">
							{
								list.map((item, index) => {
									const { url, img } = item;
									return (
										 <Link to={url} key = {index} style={{ width: '100%' }}>
											 <img src={`${img}!1-0`} style={{ width: `100%` }}/>
										 </Link>
									);
								})
							}
						</Carousel>
					)
					: (	
						<div className="_flex _fd-c">
							{
								 list.map((item, index) => {
									const { url, img } = item;
									return (
										 <Link to={url} key={index} style={{ flex: '0 0 100%' }}>
											 <img src={`${img}!1-0`} style={{ width: '100%' }} />
										 </Link>
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
Slide.propTypes = {

};
export default Slide;
