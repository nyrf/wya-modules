import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SearchBar } from 'antd-mobile';
class Search extends PureComponent {
	constructor(props, context) {
		super(props, context);
		this.state = {
			value: ""
		};
		this.handleChange = ::this.handleChange;
		this.handleSubmit = ::this.handleSubmit;
	}
	handleChange(value) {
		this.setState({
			value: value
		});
	}
	handleSubmit(value) {
		
	}
	render() {
		const { item, itemData } = this.props;
		const { title, m_tb } = itemData || {};
		return (
			<div className="v-se-modules _pe-none v-sem-search" style={{ margin: `${m_tb}px 0` }}>
				<SearchBar 
					value={this.state.value}
					placeholder={title || "搜索"}
					onCancel={this.handleSubmit}
					onSubmit={this.handleSubmit}
					cancelText="搜索"
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}
Search.propTypes = {

};
export default Search;