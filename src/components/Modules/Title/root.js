
import Viewer from './Viewer';
import Editor from './Editor';
export const Title = {
	type: '基础组件',
	name: "标题",
	Viewer,
	Editor, 
	// 初始数据
	data: {
		"m_tb": 0,
		"title": "标题名称",
		"style": 1, // 样式一: 1,  样式二: 2,  样式三: 3
		"layout": "left", // 居左: left, 居中: center, 居右: right
		"bg_corlor": "#fff", 
		"color": "#000"
	},
	dataValidity: (res = {}) => {
		if (!res.title) {
			return {
				error: "标题模块 - 标题必填"
			};
		}
		return null;
	}
};