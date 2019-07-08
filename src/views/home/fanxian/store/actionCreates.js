import * as Types from './actionTypes'
import axios from 'axios'

export const onFoodList = item => ({
  type: Types.GETFANXIANFOODLIST,
  item
})
export const asyncFanxianFood =() => {
  return dispatch => {
    axios.get('http://localhost:9000/items').then(response=> {
      let res = response.data
      dispatch(onFoodList(res))
    })
  }
}
