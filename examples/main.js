import React from 'react';
import { render } from 'react-dom';
import { WYAModules, defaultRootConfig, defaultToolsTitle } from '../src/main';

render(
	<WYAModules 
		rootConfig={defaultRootConfig} 
		toolsTitle={defaultToolsTitle}
		onSave={(res) => { console.log(res); }}
	/>, 
	document.getElementById('pages')
);


