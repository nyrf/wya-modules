import React from 'react';
import { render } from 'react-dom';
import { WYAModules, defaultModules } from '../src/main';

render(
	<WYAModules 
		modules={defaultModules} 
		onSave={(res) => { console.log(res); }}
	/>, 
	document.getElementById('pages')
);


