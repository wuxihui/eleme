import styled from 'styled-components'
import logoPic from '../../../images/logo.jpg'

export const LoginWrapper = styled.div`
  width:100%;
  height:100%;
  position:relative;
`

export const LoginTop = styled.div`
  width:100%;
  height:98px;
  // 背景
  // background:#ccc;
  position:relative;
`
export const Logo = styled.a`
  position:absolute;
  display:block;
  width:138px;
  height:58px;
  bottom:0;
  left:92px;
  background:url(${logoPic});
`
export const LoginPhone = styled.input.attrs({
  placeholder:'手机号',
  type:'text'
})`
  width:300px;
  height:48px;
  border:1px solid #dddddd;
  margin:18px 10px 0;
  padding-left:10px;
  box-sizing:border-box;
  border-radius:4px;
  color:#333;
`
export const LoginGetCode = styled.button.attrs({
  
})`
  background:#fff;
  border:none;
  position:absolute;
  top:130px;
  right:18px;
  color:#ccc;
`
export const LoginCode = styled.input.attrs({
  placeholder:'验证码',
  type:'text'
})`
  width:300px;
  height:48px;
  border:1px solid #dddddd;
  margin:18px 10px 0;
  padding-left:10px;
  box-sizing:border-box;
  border-radius:4px;
  color:#333;
`

export const LoginTips = styled.div`
  width:300px;
  height:48px;
  font-size:14px;
  color:#999;
  line-height:20px;
  margin:18px 10px 0;
  span{
    color:#2395ff;
  }
`

export const LoginButton = styled.div`
  width:300px;
  height:48px;
  font-size:16px;
  background:#4cd96f;
  color:#fff;
  line-height:48px;
  margin:18px 10px 0;
  text-align:center;
`

export const LoginAbout = styled.div`
  width:300px;
  height:48px;
  font-size:12px;
  color:#999;
  line-height:48px;
  margin:0 10px;
  text-align:center;
`