import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
class Video extends PureComponent {
	constructor(props, context) {
		super(props, context);
	}
	componentDidMount() {
		
	}
	componentDidCatch(error, info){
		console.log(error, info);
	}
	render() {
		const {
			item,
			itemData,
			inFrame
		} = this.props;
		const {
			code,
			m_tb
		} = itemData || {};
		// const src = "https://v.qq.com/iframe/player.html?vid=" + code + "&height=200&auto=0";
		return (
			<div className="v-se-modules _pe-none v-sem-video" style={{ margin: `${m_tb}px 0` }}>
				{
					// inFrame 
					// 	? (
					// 		<div 
					// 			style={{ width: `100%`, height: `200px`, background: "white" }}
					// 			className="_flex _ai-c _jc-c"
					// 		>视频限制，预览时可以展示: {code}</div> 
					// 	)
					// 	: (
					// 		<iframe 
					// 			width="100%" 
					// 			height="200" 
					// 			src={src}
					// 		/>
					// 	)
				}
				<div 
					style={{ width: `100%`, height: `200px`, background: "white" }}
					className="_flex _ai-c _jc-c _twoline"
				>视频限制，预览时可以展示: {code}</div> 
			</div>
		);
	}
}
Video.propTypes = {

};
export default Video;
