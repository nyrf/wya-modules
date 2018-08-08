import React, { Component, createElement } from 'react';

const ModulesView = (props) => {
	const { styleObj, item, itemData, modules } = props;
	const type = item.split('#')[0];
	return modules[type] 
		? createElement(modules[type].Viewer, {
			...props
		})
		: null;
};

export default ModulesView;