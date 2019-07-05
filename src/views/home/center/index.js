import React, { Component } from 'react'
import {
  UserWrapper,
  UserTop,
  UserTopHead,
  UserTopName,
  UserTab,
  UserListWrapper,
  UserList,
  Yinsi,
} from './style'
import {Route, Switch, NavLink } from 'react-router-dom'
export default class Wode extends Component{ 
  render () {
    return (
      <UserWrapper>
        {/* 顶部 */}
        <UserTop>
          <UserTopHead />
          <UserTopName>
            <NavLink to="/login">
              <h5>登录/注册</h5>
              <p>登录后享受更多特权</p>
            </NavLink>
          </UserTopName>
        </UserTop>

        {/* 红包 */}
        <UserTab>
          <div>
            <i>0</i><span>个</span>
            <p>红包</p>
          </div>
          <div>
            <i className='hyh'>0</i><span>个</span>
            <p>金币</p>
          </div>
        </UserTab>

        <UserListWrapper>
          <UserList>
            <strong className='lanse'>^_^</strong><span>我的地址</span><i>→</i>
          </UserList>          
        </UserListWrapper>
        <UserListWrapper>
          <UserList>
            <strong className='lvse'>^_^</strong><span>金币商城</span><i>→</i>
          </UserList>
          <UserList>
            <strong className='chengse'>^_^</strong><span>分享拿20元现金</span><i>→</i>
          </UserList>           
        </UserListWrapper>
        <UserListWrapper>
          <UserList>
            <strong className='lanse'>^_^</strong><span>我的客服</span><i>→</i>
          </UserList>
          <UserList>
            <strong className='lanse'>^_^</strong><span>下载饿了吗APP</span><i>→</i>
          </UserList> 
          <UserList>
            <strong className='lanse'>^_^</strong><span>规则中心</span><i>→</i>
          </UserList>           
        </UserListWrapper>

        <Yinsi>
          <p>隐私政策</p>
        </Yinsi>       
      </UserWrapper>
    )
  }
}

