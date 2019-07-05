//引入拆分出去的仓库,然后在暴露出去
import {combineReducer} from 'redux-immutable'
import {reducer as loginReducer} from '../views/home/login/store'

const reducer = combineReducers({
  login:loginReducer
})

export default reducer