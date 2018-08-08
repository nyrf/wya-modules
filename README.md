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
import { WYAModules, defaultModules } from 'wya-modules';
import { Pop, Inputs, Sliders, Colors, Radios } from 'wya-modules';

render(
	<WYAModules 
		modules={defaultModules} 
		onSave={(res) => { console.log(res); }}
	/>, 
	document.getElementById('pages')
);
```

## 其他
- 如何设置初始数据
- 如何初始化数据
```
<WYAModules 
	ref={(instance) => this.instance = instance}
	...
/>

// 初始化数据
this.instance.init(data);
// 初始化
this.instance.reset();
```
<!--  以下内容无视  -->
[changelog-image]: https://img.shields.io/badge/changelog-md-blue.svg
[changelog-url]: CHANGELOG.md

[npm-image]: https://img.shields.io/npm/v/wya-modules.svg
[npm-url]: https://www.npmjs.com/package/wya-modules
