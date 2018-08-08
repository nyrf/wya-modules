import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
const popover = {
	position: 'absolute',
	zIndex: '2',
};
const cover = {
	position: 'fixed',
	top: '0px',
	right: '0px',
	bottom: '0px',
	left: '0px',
};
const block = {
	width: '36px',
	height: '14px',
	borderRadius: '2px',
};
const swatch = {
	height: 20,
	background: '#fff',
	borderRadius: '1px',
	boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
	cursor: 'pointer',
};
class Colors extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			show: false,
		};
	}
	handleClick = () => {
		this.setState({ show: !this.state.show });
	};

	handleClose = () => {
		this.setState({ show: false });
	};

	handleChange = (color) => {
		this.props.onChange && this.props.onChange(color.hex, color);
	};
	render() {
		const { value, label } = this.props;
		return (
			<div className="_flex _ai-c">
				<div className="_1of4 _pd-r-10 _text-right">
					<div className="_lh-32">{label}</div>
				</div>
				<div 
					className="_flex _ai-c"
					style={swatch} 
					onClick={this.handleClick}
				>
					<div style={{ ...block, background: value }}/>
				</div>
				{ 
					this.state.show && (
						<div style={popover}>
							<div style={cover} onClick={this.handleClose}/>
							<SketchPicker 
								color={value}
								onChange={this.handleChange}
							/>
						</div>
					)
				}
			</div>
		);
	}
}
Colors.propTypes = {
};
export default Colors;