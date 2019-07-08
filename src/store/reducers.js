
//引入拆分出去的仓库,然后在暴露出去
import SearchReducer from '../views/search/store/reducer';

import myHomeReducer from '../views/home/myhome/store/reducers'

import fanxianReducer from '../views/home/fanxian/store/reducer'

export const myHome = myHomeReducer

export const fanxian = fanxianReducer

export const search =SearchReducer;

