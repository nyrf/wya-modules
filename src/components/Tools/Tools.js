import React, { Component, Fragment } from 'react';
import './Tools.scss';
import Child from './Child';
import { Button } from 'antd';

class Tools extends Component {
	getToolsName = () => {
		const { rootConfig } = this.props;
		let toolsList = [];
		for (let key in rootConfig) {
			if (rootConfig.hasOwnProperty(key)) {
				let item = rootConfig[key];
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
			toolsList
		};
	}
	render() {
		const { toolsList } = this.getToolsName();
		const { toolsTitle = {} } = this.props;
		return (
			<div className="v-se-tools">
				<div style={{ overflow: 'hidden', clear: 'both' }}>
					{
						toolsList.map((item, index) => {
							return (
								<Fragment key={index}>
									<div className="_title">
										{toolsTitle[index] || `工具 ${index}`}
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
