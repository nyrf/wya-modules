import React, { Component, createElement } from 'react';
const ModulesEdit = (props) => {
	const { item, rootConfig } = props;
	const type = item ? item.split('#')[0] : null;
	return rootConfig[type] 
		? createElement(rootConfig[type].Editor, {
			...props
		})
		: null;
};
export default ModulesEdit;
