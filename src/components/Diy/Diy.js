import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import itemTypes from '../itemTypes';
import Modules from '../Modules/Modules';

const style = {
	cursor: 'move',
	position: "relative",
	zIndex: 300
};
const styleDel = {
	background: "#108ee9",
	position: "absolute",
	right: 0,
	width: "20px",
	color: "white",
	textAlign: "center",
	zIndex: 300
};
const specSource = {
	beginDrag(props) { // 传递给item中的monitor
		props.onEditing(null);
		return {
			item: props.item,
			originalIndex: props.onFind(props.item)
		};
	},

	endDrag(props, monitor) {
		const { originalIndex } = monitor.getItem();
		const didDrop = monitor.didDrop();
		// if (!didDrop) {
		// 	props.onSorted(props.item, originalIndex);
		// }
	}
};
let timer = null;
const specTarget = {
	canDrop() {
		return false;
	},

	hover(props, monitor) {
		const { item: overItem, toolsDragging } = props;
		if (toolsDragging) {
			// 如果tools在拖拽，不排序
			props.onSorting(overItem);
			// 如果移除，则默认插入到最后一个
			timer && clearTimeout(timer);
			timer = setTimeout(() => {
				props.onSorting(null);
			}, 100);
			return;
		} 
		const { item: draggedItem } = monitor.getItem();
		if (draggedItem !== overItem) {
			const overIndex = props.onFind(overItem);
			props.onSorted(draggedItem, overIndex);
		}
	}
};
/**
 * 可实现排序，既是源，又是目标
 */
// 实现 Tools(DragSource) -> (Diy)DropTarget 插入排序功能
@DropTarget(itemTypes.Moduels, specTarget, connect => ({
	connectDropTarget: connect.dropTarget(),
}))
// 实现 Diy(DragSource) -> (Diy)DropTarget 上下排序功能
@DragSource(itemTypes.Moduels, specSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
}))
class SourceTarget extends Component {
	static propTypes = {
		connectDragSource: PropTypes.func.isRequired,
		connectDropTarget: PropTypes.func.isRequired,
		isDragging: PropTypes.bool.isRequired,
	};
	constructor(props){
		super(props);
		this.handleClick = ::this.handleClick;
		this.handleEnter = ::this.handleEnter;
		this.handleLeave = ::this.handleLeave;
		this.handleDel = ::this.handleDel;
		this.state = {
			hover: false
		};
	}
	handleClick(){
		const { item, editing } = this.props;
		this.props.onEditing(item);
	}
	handleEnter(){
		this.setState({
			hover: true
		});
	}
	handleLeave(){
		this.setState({
			hover: false
		});
	}
	handleDel(event){
		event.stopPropagation(); // 阻止事件冒泡
		const { item, editing } = this.props;
		// 先去除编辑
		editing === item && this.props.onEditing(null);
		// 删除
		this.props.onDel(item);
	}
	render() {
		const { isDragging, connectDragSource, connectDropTarget } = this.props;
		const { item, lastItem, itemData, onEditing, onDel, editing, toolsDragging, sorting, rootConfig  } = this.props;
		const { hover } = this.state;
		const opacity = isDragging ? 0 : 1;
		let border = hover ? "1px dashed #108ee9" : "none";
		border = editing === item ? "1px solid #108ee9" : border;
		return (
			<div>
				{
					(toolsDragging && sorting == item) &&
						<div style={{ height: 2, background: "red" }} />
				}
				{
					connectDragSource(connectDropTarget(
						<div 
							style={{ ...style, opacity, border }} 
							onClick={this.handleClick} 
							onMouseEnter={this.handleEnter}
							onMouseLeave={this.handleLeave}
						>
							{
								(hover || editing === item)  &&
									<p 
										style={styleDel} 
										onClick={this.handleDel} 
									>&#10005;</p>
							}
							<Modules 
								item={item} 
								itemData={itemData} 
								styleObj={{ minHeight: (hover ? 20 : 3) }} 
								inFrame={true}
								rootConfig={rootConfig}
							/>
						</div>
					))
				}
				{
					(lastItem && toolsDragging && sorting == null) &&
						<div style={{ height: 2, background: "red" }} />
				}
			</div>
		);
	}
}
SourceTarget.propTypes = {

};
export default SourceTarget;
