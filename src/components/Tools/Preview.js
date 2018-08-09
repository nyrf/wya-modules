/**
 * 功能大致实现，后续再考虑重构
 */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CreatePortalFunc } from 'wya-rc';
import './Preview.scss';
import ModulesView from '../Modules/ModulesView';
@CreatePortalFunc({
	cName: 'wya-modules-preview'
})
class Preview extends Component {
	constructor(props, context) {
		super(props, context);
	}
	componentDidMount() {
		this.el.classList.add('__active');
	}
	componentWillUnmount() {
		this.timer && clearTimeout(this.timer);
	}
	setEl = (node) => {
		this.el = this.el || node;
	}
	close = () => {
		this && this.props.onClose && this.props.onClose();
	}
	handleClose = (e) => {
		// 
		e && e.preventDefault();
		e && e.stopPropagation();

		this.el.classList.remove('__active');
		this.timer = setTimeout(() => {
			// 主线程
			this && this.props.onClose && this.props.onClose();
		}, 201);
	}
	handleSure = (res) => {
		this.el.classList.remove('__active');
		this.timer = setTimeout(() => {
			this.props.onSure && this.props.onSure(res);
		}, 201);
	}
	render() {
		const { itemArr, itemObj, modules } = this.props;
		return (
			<div className="wya-me-preview" ref={this.setEl}>
				<div className="__mask" onClick={this.handleClose}/>
				<div className="__container">
					<div className="__content">
						{
							itemArr.map((item, index) => {
								return (
									<ModulesView 
										key={`${item}`}
										item={item}
										itemData={itemObj[item]}
										modules={modules}
									/>
								);
							})
						}
					</div>
				</div>
			</div>
		);
	}
}

Preview.propTypes = {
};

export default Preview;