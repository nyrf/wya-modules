import React, { Component, PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Pop from '../Common/Pop';
import { Radio, Input } from 'antd';
const RadioGroup = Radio.Group;
class Editor extends PureComponent {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<Pop title="Tpl" className="v-seme-tpl"> 
				<Fragment>
					<div>暂时没有编辑</div>
				</Fragment>
			</Pop>
		);
	}
}
Editor.propTypes = {
};
export default Editor;