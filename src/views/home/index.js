import React, { Component } from 'react'
import { 
  HomeWrap, 
  HeaderWrap,
  TheaderWrap,
  RheaderWrap,
  BheaderWrap,
  MyInput,
  HomeFooterWrap,
  LeftFooterWrap,
  PleftFooterWrap,
  CenterFooterWrap,
  RightFooterWrap 
} from './style'
import { NavLink } from 'react-router-dom'



export default class Home extends Component {
  render() {
    return (
      <HomeWrap>
        <HeaderWrap>
          <TheaderWrap>
            <i className="iconfont icon-weizhi"></i>
            <RheaderWrap>
              福中三路深圳市名
            </RheaderWrap>
          </TheaderWrap>
          <BheaderWrap>
              <i className="iconfont icon-fdj"></i>
            <MyInput>
              搜索饿了么商家、商品名称
            </MyInput>
          </BheaderWrap>
        </HeaderWrap>
        <HomeFooterWrap>
          <LeftFooterWrap>
            <NavLink to="/home">
              <i className="iconfont icon-sy"></i>
              首页
            </NavLink>
          </LeftFooterWrap>
          <PleftFooterWrap>
            <NavLink to="/Find">
              <i className="iconfont icon-fx"></i>
              发现
            </NavLink>
          </PleftFooterWrap>
          <CenterFooterWrap>
            <NavLink to="/Dingdan">
              <i className="iconfont icon-dd"></i>
              订单
            </NavLink>
          </CenterFooterWrap>
          <RightFooterWrap>
            <NavLink to="/Wode">
              <i className="iconfont icon-wd"></i>
              我的
            </NavLink>
          </RightFooterWrap>
        </HomeFooterWrap>
      </HomeWrap>
    )
  }
}
