
import Viewer from './Viewer';
import Editor from './Editor';
export const Video = {
	type: '其他组件',
	name: "视频",
	Viewer,
	Editor, 
	// 初始数据
	data: {
		"m_tb": 0,
		"code": ""
	},
	dataValidity: (res = {}) => {
		if (!res.code) {
			return {
				error: '视频模块 - 地址必填'
			};
		}
		return null;
	}
};