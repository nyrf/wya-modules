/**
 * @type
 * 0: 基础组件
 * 1: 其他组件
 * 2: 营销组件
 */
import Viewer from './Viewer';
import Editor from './Editor';
export const Input = {
	type: 0,
	name: "输入框",
	Viewer,
	Editor, 
	// 初始数据
	data: {
		title: "自定义标题",
		tip: "自定义提示内容"
	}
};