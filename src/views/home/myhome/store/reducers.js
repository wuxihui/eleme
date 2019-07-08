import * as Types from './typesAction'
const initState = {
  bannerList: [],
  superList: [],
  datalisList: [],
  qualityList: []
}

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  if(action.type === Types.GET_BANNER_LIST) {
    newState.bannerList = action.list
  }

  if(action.type === Types.GET_SUPER_LIST) {
    newState.superList = action.listSuper
  }

  if(action.type === Types.GET_DATALIS_LIST) {
    newState.datalisList = action.datalisList
  }

  if(action.type === Types.GET_QUALITY_LIST) {
    newState.qualityList = action.qualityList
  }
  return newState
}