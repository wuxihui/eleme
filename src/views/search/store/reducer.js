import * as types from './actionType'
const initState ={
  inputVal:'',
  searchHistory:[],
  hotSearch:[],
  searchshop:[],
  searchPush:[]
}

export default (state = initState,action)=>{
let newState = JSON.parse(JSON.stringify(state))
if(types.SET_INPUTVAL===action.type){
  newState.inputVal=action.value;
}
return newState
}