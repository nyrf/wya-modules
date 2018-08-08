import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tools from './Tools/Tools';
import Frame from './Frame/Frame';
import DiyEdit from './Diy/DiyEdit';
import Save from './Tools/Save';
// store
import * as types from '../store/actions';
import { getNewData, initialState } from '../store/store';

// 库
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
@DragDropContext(HTML5Backend)
class Combo extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			// 编辑的栏目
			editing: null,
			// tools 是否处于拖拽状态
			toolsDragging: false,
			// 排序的内容
			sorting: null,
			data: {
				...initialState
			}
		};
	}
	getItemIndex = (value) => {
		const { data: { itemArr = [], itemObj = {} } } = this.state;
		return itemArr.findIndex(item => item === value);
	}
	// - 状态管理
	handleDragging = (toolsDragging) => {
		this.setState({
			toolsDragging,
			sorting: null
		});
	}
	handleSorting = (sorting) => {
		sorting != this.state.sorting && this.setState({
			sorting: sorting || null
		});
	}
	handleEditing = (item) => {
		this.setState({
			editing: item
		});
	}
	// - end
	// - 数据管理
	// 添加
	handleAdd = (atType, sorting) => {
		const { rootConfig } = this.props;
		const atIndex = this.getItemIndex(sorting);
		this.setNewData({
			type: types.WYA_MODULES_ADD,
			atType,
			atIndex: atIndex >= 0 ? atIndex : null,
			data: rootConfig[atType].data
		});
	}
	// 排序
	handleSorted = (item, atIndex) => {
		this.setNewData({
			type: types.WYA_MODULES_SORT,
			item,
			atIndex
		});
	}
	// 编辑
	handleEdited = (item, data) => {
		this.setNewData({
			type: types.WYA_MODULES_UPDATE,
			item,
			data
		});
	}
	// 删除
	handleDel = (item) => {
		this.setNewData({
			type: types.WYA_MODULES_DEL,
			item
		});
	}
	// 初始化数据
	init(data) {
		this.setNewData({
			type: types.WYA_MODULES_INIT,
			data
		});
	}
	// 清理数据
	reset() {
		this.setNewData({
			type: types.WYA_MODULES_RESET,
		});
	}
	setNewData = (action) => {
		this.setState({
			data: getNewData(this.state.data, action)
		});
	}
	// - end
	render() {
		const { 
			editing, 
			sorting, 
			toolsDragging,
			data: { itemArr = [], itemObj = {} }
		} = this.state;
		const { className, onSave, rootConfig, toolsTitle } = this.props;
		// g-fw-w
		return (
			<div className={`wya-modules ${className || ""}`} style={{ display: `flex`, overflow: 'scroll' }}>
				<Tools 
					onAdd={this.handleAdd}
					onDragging={this.handleDragging}
					sorting={sorting}

					toolsTitle={toolsTitle}
					rootConfig={rootConfig}
				/>
				<Frame 
					itemArr={itemArr}
					itemObj={itemObj}
					onFind={this.getItemIndex}
					onDel={this.handleDel}
					onSorted={this.handleSorted}
					onSorting={this.handleSorting}
					onEditing={this.handleEditing}
					onDragging={this.handleDragging}
					toolsDragging={toolsDragging}
					editing={editing}
					sorting={sorting}

					rootConfig={rootConfig}
				/>
				<DiyEdit 
					item={editing} 
					itemData={itemObj[editing]} 
					onEdited={this.handleEdited}

					rootConfig={rootConfig}
				/>
				<Save 
					editing={editing}
					itemArr={itemArr}
					itemObj={itemObj}
					onSave={onSave}

					rootConfig={rootConfig}
				/>
			</div>
		);
	}
}
Combo.propTypes = {
};
export default Combo;