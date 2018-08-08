/**
 * @type
 * 0: 基础组件
 * 1: 其他组件
 * 2: 营销组件
 */
import Viewer from './Viewer';
import Editor from './Editor';
export const CutOff = {
	type: 1,
	name: "分割线",
	Viewer,
	Editor, 
	// 初始数据
	data: {
		"m_tb": 0,
		"color": "#e0e0e0",
		"style": "solid"
	}
};