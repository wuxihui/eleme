import * as Types from './actionTypes'
const initState = {
  foodList:[]
}
export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  if(action.type === Types.GETFANXIANFOODLIST) {
    newState.foodList = action.item
  }
  return newState
}

