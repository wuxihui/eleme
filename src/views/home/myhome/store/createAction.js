import * as Types from './typesAction'
import axios from 'axios'

export const getBannerList = (list) => {
  return {
    type: Types.GET_BANNER_LIST,
    list
  }
}

export const getSuperList = (listSuper) => {
  return {
    type: Types.GET_SUPER_LIST,
    listSuper
  }
}

export const getDatailsLIist = (datalisList) => {
  return {
    type: Types.GET_DATALIS_LIST,
    datalisList
  }
}

export const getQualityList = (qualityList) => {
  return {
    type: Types.GET_QUALITY_LIST,
    qualityList
  }
}

export const axiosGetBannerList = () => {
  return (dispatch) => {
    axios.get('http://localhost:3001/bannerList')
         .then(response => {
           let res = response.data
           console.log(res)
           dispatch(getBannerList(res))
         })
  }
}

export const axiosGetSuperList = () => {
  return (dispatch) => {
    axios.get('http://localhost:3001/superList')
         .then(response => {
           let res = response.data
           console.log(res)
           dispatch(getSuperList(res))
         })
  }
}

export const axiosGetDetailsList = () => {
  return (dispatch) => {
    axios.get('http://localhost:3001/detailsList')
         .then(response => {
           let res = response.data
           console.log(res)
           dispatch(getDatailsLIist(res))
         })
  }
}

export const axiosGetQualityList = () => {
  return (dispatch) => {
    axios.get('http://localhost:3001/qualityList')
         .then(response => {
           let res = response.data
           console.log(res)
           dispatch(getQualityList(res))
         })
  }
}