import React, { Component, createElement } from 'react';

const Modules = (props) => {
	const { styleObj, item, itemData, rootConfig } = props;
	const type = item.split('#')[0];
	return rootConfig[type] 
		? createElement(rootConfig[type].Viewer, {
			...props
		})
		: null;
};

export default Modules;