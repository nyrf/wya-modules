import React, { Component, createElement } from 'react';
const ModulesEdit = (props) => {
	const { item, modules } = props;
	const type = item ? item.split('#')[0] : null;
	return modules[type] 
		? createElement(modules[type].Editor, {
			...props
		})
		: null;
};
export default ModulesEdit;
