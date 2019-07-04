import axios from 'axios';
import * as Types from './actionType';


export const SetInputVal=(value)=>({
  type:Types.SET_INPUTVAL,
  value
})

export const onStudentList=(value)=>{
  return (dispatch)=>{
    axios.get('http://localhost:3000/restapi/shopping/v1/typeahead',{
      params:{
        kw: '龙虾',
        latitude: 22.543675,
        longitude: 114.059611,
        city_id: 11
      }
    }).then((res)=>{
      console.log(res);
    })
  } 
}
export const GetInputDate=(data)=>({
  type:Types.GET_INPUTDATA,
  ...data
})