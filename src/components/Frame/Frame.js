import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import itemTypes from '../itemTypes';
import DiyView from '../Diy/DiyView';
import './Frame.scss';
const spec = {
	drop(props, monitor, instance) {
		return { name: 'Frame' }; // 给 DropScouce
	}
};
const collect = (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop(),
});
// 实现 Tools(DragSource) -> (Frame)DropTarget 增加元素功能
@DropTarget(itemTypes.Tools, spec, collect)
class Frame extends Component {
	static propTypes = {
		connectDropTarget: PropTypes.func.isRequired,
		isOver: PropTypes.bool.isRequired,
		canDrop: PropTypes.bool.isRequired,
	};
	componentDidMount(){
		// 设置实际高度 这里可以操作dom节点
		const $frame = document.querySelector(".v-se-frame");
		let frameH = window.innerHeight - $frame.offsetTop;
		$frame.style.height = `${frameH = frameH > 736 ? 736 : frameH}px`;
		// content
		const $content = document.querySelector(".v-se-frame ._content");
		let contentH = window.innerHeight - $content.offsetTop;
		$content.style.height = `${contentH = contentH > 562 ? 562 : contentH}px`;
	}
	render() {
		const { canDrop, isOver, connectDropTarget } = this.props;
		const { itemObj, itemArr, onFind, onSorted, onSorting, onEditing, onDel, editing, toolsDragging, sorting, modules } = this.props;
		const isActive = canDrop && isOver;
		let border = '1px solid #222';
		if (isActive) {
			border = '1px solid darkgreen';
		} else if (canDrop) {
			border = '1px solid darkkhaki';
		}
		return (
			<div className="v-se-frame">
				{
				 	connectDropTarget(
				 		<div className="_content">
							{
								itemArr.map((item, index) => {
									const lastItem = index === itemArr.length - 1;
									return (
										<DiyView 
											key={`${item}`} // 不要变化，否则影响排序R
											item={item}
											itemData={itemObj[item]}
											onDel={onDel}
											onFind={onFind}
											onSorted={onSorted}
											onSorting={onSorting}
											onEditing={onEditing}
											toolsDragging={toolsDragging}
											editing={editing}
											sorting={sorting}
											lastItem={lastItem}
											modules={modules}
										/>
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

export default Frame;
