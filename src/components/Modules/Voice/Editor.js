import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Pop, Inputs, Sliders, Colors, Radios } from '../Common/root';
import { Radio, Input, message } from 'antd';
import { Upload } from 'wya-rc';
const RadioGroup = Radio.Group;
class Editor extends Component {
	constructor(props, context) {
		super(props, context);
	}
	handleChange = (value, key, defaultValue) => {
		const { item, itemData } = this.props; 
		this.props.onEdited(item, { ...itemData, [key]: value || defaultValue });
	}
	render() {
		const { item, itemData, onEdited } = this.props;
		const { style, m_tb, loop, img, mp3 } = itemData || {};
		return (
			<Pop title="音频" className="v-seme-voice"> 
				<Sliders 
					value={m_tb} 
					onChange={value => this.handleChange(value, 'm_tb', 0)} 
				/>
				<Radios 
					label="显示类型:"
					onChange={value => this.handleChange(value, 'style', '')}
					value={style}
					dataSource={[
						{
							value: 1,
							label: "居左"
						},
						{
							value: 2,
							label: "居右"
						}
					]}
				/>
				<Upload 
					type="file" 
					accept="audio/mpeg" 
					onFileSuccess={e => (message.success('上传成功'), this.handleChange(e.data.url, 'mp3'))} 
					onFileError={e => message.error(e.msg)}>
					<div className="_flex _jc-fs">
						<label className="_text-right _dp-ib _pd-r-10 _1of4"> 音频： </label>
						<div>
							{mp3 && <p className="_twoline" style={{ width: 260 }}> {mp3} </p>}
							<p className="_mg-0 _lh-24" style={{ color: '#0083ed' }}>请选择文件 </p>
							<p className="_mg-0 _fs-xs _lh-12 _mg-tb-10"> 仅支持mp3格式 </p>
						</div>
					</div>
				</Upload>
				<Upload onFileSuccess={e => this.handleChange(e.data.url, 'img')} onFileError={e => message.error(e.msg)}>
					<div className="_flex _jc-fs">
						<label className="_text-right _dp-ib _pd-r-10 _1of4"> 头像： </label>
						<div 
							className="_bg"
							style={{ backgroundImage: `url(${img}!4-4)` }}
						/>
					</div>
				</Upload>
				<Radios 
					label="播放:"
					onChange={value => this.handleChange(value, 'loop', 0)}
					value={loop}
					dataSource={[
						{
							value: 1,
							label: "循环播放"
						},
						{
							value: 0,
							label: "单次播放"
						}
					]}
				/>
			</Pop>
		);
	}
}
Editor.propTypes = {
};
export default Editor;