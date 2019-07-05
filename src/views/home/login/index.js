import React, { Component } from 'react'
import {
  LoginWrapper,
  LoginTop,
  Logo,
  LoginPhone,
  LoginGetCode,
  LoginCode,
  LoginTips,
  LoginButton,
  LoginAbout
} from './style'
import { message, } from 'antd';
import store from './store'
import {Route, Switch, NavLink } from 'react-router-dom'

export default class Login extends Component{
  render () {
    return (
      <LoginWrapper>

        <LoginTop>
          <Logo />
        </LoginTop>
        <LoginPhone>
        </LoginPhone>
        <LoginGetCode onClick={success}>
          获取验证码
        </LoginGetCode>
        <LoginCode></LoginCode>
        <LoginTips>新用户登录即自动注册，并表示已同意<span>《用户服务协议》</span></LoginTips>
        <NavLink to="/home">
          <LoginButton>登录</LoginButton>
        </NavLink>
        <LoginAbout>关于我们</LoginAbout>
      </LoginWrapper>
    )
  }
}
const success = () => {
  message.success('验证码为123456');
};