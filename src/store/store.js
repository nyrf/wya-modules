import * as types from './actions';
export const initialState = {
	isFetching: 0,      // 是否已经获取 
	editing: null,
	itemArr: [],
	itemObj: {}
};
let sort = 0;
const getInitData = (atType, data) => {
	let item;
	item = `${atType}#${sort}`;
	sort ++;
	return { data, item };
};
const initItemMain = (res) => {
	let itemArr = [];
	let itemObj = {};
	res.diy = typeof res.diy === 'string' ? JSON.parse(res.diy) : res.diy;
	for (let i = 0; i < res.diy.length; i++) {
		const type = `${res.diy[i].type}#${i}`;
		itemArr = [...itemArr, type];
		itemObj[type] = res.diy[i].content;
	}
	let { page, header, remark } = res;
	return { itemArr, itemObj, header, page, remark };
};

export const getNewData = (state = initialState, action) => {
	let atType, atInit, atIndex, item, data, itemArr;
	switch (action.type) {
		case types.WYA_MODULES_INIT:
			state = {
				...state,
				...initItemMain(action.data),
				isFetching: 1
			};
			return state;
		// 新增
		case types.WYA_MODULES_ADD:
			atType = action.atType;
			atIndex = action.atIndex;
			data = action.data;
			atInit = getInitData(atType, data);
			item = atInit.item;
			data = atInit.data;
			state = {
				...state,
				itemArr: [...state.itemArr, item],
				itemObj: {
					...state.itemObj,
					[item]: data
				}
			};
			if (atIndex != null){
				state.itemArr.pop();
				state.itemArr.splice(atIndex, 0, item);
			}
			return state;
		// 编辑
		case types.WYA_MODULES_UPDATE:
			item = action.item;
			data = action.data;
			state = {
				...state,
				itemObj: {
					...state.itemObj,
					[item]: data
				}
			};
			return state;
		// 排序
		case types.WYA_MODULES_SORT:
			item = action.item;
			itemArr = state.itemArr.filter(_item => _item != item);
			itemArr.splice(action.atIndex, 0, item);
			state = {
				...state,
				itemArr
			};
			return state;
		// 删除
		case types.WYA_MODULES_DEL:
			item = action.item;
			itemArr = state.itemArr.filter(_item => _item != action.item);
			state = {
				...state,
				itemArr
			};
			return state;
		case types.WYA_MODULES_RESET:
			// sort = 0;
			return {
				...initialState
			};
		default:
			return state;
	}
};