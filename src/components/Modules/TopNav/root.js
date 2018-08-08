
import Viewer from './Viewer';
import Editor from './Editor';
const listItem = {
	"title": "顶部导航",
	"url": "",
	"bg_color": "#fff",
	"color": "#000"
};
export const TopNav = {
	type: '基础组件',
	name: "顶部导航",
	Viewer,
	Editor, 
	// 初始数据
	data: {
		"m_tb": 0,
		style: 1,
		"list": [
			listItem
		]
	},
	listItem,
	dataValidity: (res = {}) => {
		for (let i = 0; i < res.list.length; i++) {
			let item = res.list[i] || {};
			if (!item.title) {
				return {
					error: "顶部导航模块 - 标题必填"
				};
			}
			// if (!item.url) {
			// 	return {
			// 		error: "顶部导航模块 - 链接地址必填"
			// 	};
			// }
		}
		return null;
	}
};