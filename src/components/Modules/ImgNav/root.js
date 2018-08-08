
import Viewer from './Viewer';
import Editor from './Editor';
const listItem = {
	"title": "图片导航",
	"url": "",
	"img": "http://oss.ruishan666.com/image/testzy/171016/124168708267/6.jpg"
};
export const ImgNav = {
	type: '基础组件',
	name: "图片导航",
	Viewer,
	Editor, 
	// 初始数据
	data: {
		"m_tb": 0,
		"style": 1, // 样式一: 1(一排),  样式二: 2（一排两个
		"layout": 1, // 布局一: 1(固定大小),  布局二: 2（按图片自适应）
		"list": [
			listItem
		]
	},
	listItem,
	dataValidity: (res = {}) => {
		for (let i = 0; i < res.list.length; i++) {
			let item = res.list[i] || {};
			if (!item.img) {
				return {
					error: "图片导航模块 - 图片必填"
				};
			}
			// if (!item.url) {
			// 	return {
			// 		error: "图片导航模块 - 链接地址必填"
			// 	};
			// }
		}
		return null;
	}
};