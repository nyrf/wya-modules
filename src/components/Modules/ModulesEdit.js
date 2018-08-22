import React, { Component, createElement } from 'react';
const ModulesEdit = (props) => {
	const { item, modules } = props;
	const type = item ? item.split('#')[0] : null;
	return modules[type] 
		? createElement(modules[type].Editor, {
			key: item, // 确保他的唯一性, 可能前端两个编辑的输入框内容会被保留
			...props
		})
		: null;
};
export default ModulesEdit;
