import Viewer from './Viewer';
import Editor from './Editor';
export const CutOff = {
	type: '其他组件',
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