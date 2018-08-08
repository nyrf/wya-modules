
import Viewer from './Viewer';
import Editor from './Editor';
export const Rtf = {
	type: '基础组件',
	name: "富文本",
	Viewer,
	Editor, 
	// 初始数据
	data: {
		"m_tb": 0,
		"rtf": {
			raw: {
				"blocks": [{
					"key": "180fu",
					"text": "富文本编辑器",
					"type": "unstyled",
					"depth": 0,
					"inlineStyleRanges": [],
					"entityRanges": [],
					"data": {}
				}],
				"entityMap": {}
			},
			html: "<p>富文本编辑器</p>"
		}

	}
};