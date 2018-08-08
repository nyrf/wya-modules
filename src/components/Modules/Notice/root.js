/**
 * @type
 * 0: 基础组件
 * 1: 其他组件
 * 2: 营销组件
 */
import Viewer from './Viewer';
import Editor from './Editor';
export const Notice = {
	type: 0,
	name: "公告",
	Viewer,
	Editor, 
	// 初始数据
	data: {
		"m_tb": 0,
		"title": "公告标题",
		"bg_color": "#fff",
		"color": "#000"
	},
	dataValidity: (res = {}) => {
		if (!res.title) {
			return {
				error: "公告模块 - 标题必填"
			};
		}
		return null;
	}
};