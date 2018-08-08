import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pop from '../Common/Pop';
import { Editor } from 'wya-rc';
class Editors extends Component {
	constructor(props, context) {
		super(props, context);
	}
	handleRawChange = (raw) => {
		const { item, itemData } = this.props;
		this.props.onEdited(item, {
			...itemData,
			rtf: {
				...itemData.rtf,
				raw
			}
		});
	}
	handleHTMLChange = (html) => {
		const { item, itemData } = this.props;
		this.props.onEdited(item, {
			...itemData,
			rtf: {
				...itemData.rtf,
				html
			}
		});
	}
	render() {
		const { item, itemData } = this.props;
		const { rtf = {} } = itemData || {};
		const { html, raw } = rtf;
		return (
			<Pop title="富文本" className="v-seme-rtf">
				<Editor
					initialContent={typeof raw === 'string' ? JSON.parse(raw) : raw}
					imageControls={{
						floatLeft: false,
						floatRight: false,
						alignLeft: true,
						alignCenter: true,
						alignRight: true,
						link: false,
						size: false
					}}
					onRawChange={this.handleRawChange}
					onHTMLChange={this.handleHTMLChange}
				/>
			</Pop>
		);
	}
}
Editors.propTypes = {
};
export default Editors;
