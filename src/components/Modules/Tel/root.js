
import Viewer from './Viewer';
import Editor from './Editor';
export const Tel = {
	type: '基础组件',
	name: "电话",
	Viewer,
	Editor, 
	// 初始数据
	data: {
		"m_tb": 0,
		"tel": 15000000000,
		"name": "联系人姓名",
		"bg_corlor": "#fff", 
		"color": "#000"
	},
	dataValidity: (res = {}) => {
		if (!res.tel) {
			return {
				error: "电话模块 - 联系人电话必填"
			};
		}
		if (!res.name) {
			return {
				error: "电话模块 - 联系人姓名必填"
			};
		}
		return null;
	}
};