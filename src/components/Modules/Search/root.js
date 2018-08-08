/**
 * @type
 * 0: 基础组件
 * 1: 其他组件
 * 2: 营销组件
 */
import Viewer from './Viewer';
import Editor from './Editor';
export const Search = {
	type: 0,
	name: "搜索",
	Viewer,
	Editor, 
	// 初始数据
	data: {
		"m_tb": 0,
		"title": "搜索"
	}
};