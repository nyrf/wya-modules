import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
class Voice extends PureComponent {
	constructor(props, context) {
		super(props, context);
		this.handleVoice = this.handleVoice.bind(this);
		this.state = {
			status: !1, // 是否正在完成
			load: !1, // 是否加载完成
			player: !1// 是否正在播放
		};
	}
	handleVoice(){
		if (!this.state.load){
			this.setState({
				status: !0// 正在加载
			});
			const { itemData: { mp3 } } = this.props;
			let audio = new Audio();
			audio.loop = !!this.props.itemData.loop;
			audio.src = mp3;
			audio.onloadedmetadata = () => {
				audio.play();
				this.setState({
					status: !1,
					load: !0,
					player: !0
				});
			};
		} else {
			this.setState({
				player: !this.state.player
			});
		}
	}
	render() {
		const {
			item,
			itemData
		} = this.props;
		const {
			m_tb,
			img,
			style
		} = itemData || {};
		return (
			<div 
				style={{ margin: `${m_tb}px 0` }} 
				onClick = {this.handleVoice}
				className={
					classnames(
						"v-se-modules v-sem-voice _row _pe-none",
						{ "_disabled": this.state.status }
					)
				}
			>
				<div 
					className={
						classnames(
							"_vcontent",
							`_style-${style}`,
							{ "_vplay": this.state.player }
						)
					}
				 >
					<img src={img} className="_logo" />
					<span className="_bar">
						<span className="_load">
							{this.state.status && '加载中'}
						</span>
						<i className="_static" />
						<i className="_play" />
					</span> 
				</div>
			</div>
		);
	}
}
Voice.propTypes = {

};
export default Voice;