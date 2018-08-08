/**
 * @type
 * 0: 基础组件
 * 1: 其他组件
 * 2: 营销组件
 */
import Viewer from './Viewer';
import Editor from './Editor';
export const Voice = {
	type: 1,
	name: "音频",
	Viewer,
	Editor, 
	// 初始数据
	data: {
		"m_tb": 0,
		"img": "http://oss.ruishan666.com/image/testzy/171016/124168708267/6.jpg",
		"mp3": "",
		"style": 1,
		"loop": 1
	},
	dataValidity: (res = {}) => {
		if (!res.img) {
			return {
				error: '音频模块 - 图片必填'
			};
		}
		if (!res.mp3) {
			return {
				error: '音频模块 - 文件必填'
			};
		}
		return null;
	}
};