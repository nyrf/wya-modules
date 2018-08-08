# wya-modules
[![npm][npm-image]][npm-url] [![changelog][changelog-image]][changelog-url]

## [Demo](https://wya-team.github.io/wya-modules/demo/index.html)

## 安装

```vim
npm install wya-modules --save
```

## 用法

```jsx
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

```
<!--  以下内容无视  -->
[changelog-image]: https://img.shields.io/badge/changelog-md-blue.svg
[changelog-url]: CHANGELOG.md

[npm-image]: https://img.shields.io/npm/v/wya-modules.svg
[npm-url]: https://www.npmjs.com/package/wya-modules
