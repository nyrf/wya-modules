import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import itemTypes from '../itemTypes';

const style = {};

const spec = {
	beginDrag(props) { // 给 DropTarget
		const { onDragging } = props;
		// 开始拖动
		onDragging && props.onDragging(true);
		return {
			name: props.name,
		};
	},

	endDrag(props, monitor) {
		// beginDrag 返回值
		const item = monitor.getItem();
		
		// DragSource -> DragTarget，即将源拖到目标里 会返回值，否者为null
		const dropResult = monitor.getDropResult();
		const { type, onAdd, onDragging, sorting } = props;
		
		// 停止拖动
		onDragging && onDragging(false);

		if (dropResult) {
			// 增加列表
			onAdd && onAdd(type, sorting);
			console.log(`You dropped ${item.name} into ${dropResult.name}!`);
		}
	},
};
const collect = (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	isDragging: monitor.isDragging(),
});
// 实现 Tools(DragSource) -> (Frame)DropTarget 增加元素功能
@DragSource(itemTypes.Tools, spec, collect)
class Child extends Component {
	static propTypes = {
		connectDragSource: PropTypes.func.isRequired,
		isDragging: PropTypes.bool.isRequired,
		name: PropTypes.string.isRequired,
	};
	handleClick = () => {
		const { type, onAdd, name } = this.props;
		onAdd && onAdd(type, false);
		console.log(`You clicked ${name} into Frame!`);
	}
	render() {
		const { isDragging, connectDragSource } = this.props;
		const { name } = this.props;
		const opacity = isDragging ? 0.4 : 1;

		return (
			connectDragSource(
				<div className="_div">
					<div style={{ ...style, opacity }} className="_item" onClick={this.handleClick}>
						{name}
					</div>
				</div>
				
			)
		);
	}
}

export default Child;

