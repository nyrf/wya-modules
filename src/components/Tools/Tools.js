import React, { Component, Fragment } from 'react';
import './Tools.scss';
import Child from './Child';
import { Button } from 'antd';

class Tools extends Component {
	getToolsName = () => {
		const { modules } = this.props;
		let toolsList = {};
		for (let key in modules) {
			if (modules.hasOwnProperty(key)) {
				let item = modules[key];
				let type = item.type;
				if (!toolsList[type]) {
					toolsList[type] = [];
				}
				toolsList[type].push({
					key,
					...item
				});
			}
		}

		return {
			toolsList,
		};
	}
	render() {
		const { toolsList } = this.getToolsName();
		return (
			<div className="wya-me-tools">
				<div style={{ overflow: 'hidden', clear: 'both' }}>
					{
						Object.keys(toolsList).map((key, index) => {
							const item = toolsList[key];
							return (
								<Fragment key={index}>
									<div className="_title">
										{key || `工具 ${index}`}
									</div>
									<div className="_childs">
										{
											item.map((_item, index) => {
												return (
													<Child
														key={_item.key} 
														type={_item.key} 
														name={_item.name} 
														{...this.props}
													/>
												);
											})
										}
									</div>
									
								</Fragment>
							);
						})
					}
				</div>
			</div>
		);
	}
}
export default Tools;
