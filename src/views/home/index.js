import React, { Component } from 'react'
import { 
  HomeWrap, 
  HeaderWrap,
  TheaderWrap,
  RheaderWrap,
  BheaderWrap,
  MyInput 
} from './style'


export default class Home extends Component {
  render() {
    return (
      <HomeWrap>
        <HeaderWrap>
          <TheaderWrap>
            <i className="iconfont icon-weizhi"></i>
            <RheaderWrap>
              福中三路深圳市
            </RheaderWrap>
          </TheaderWrap>
          <BheaderWrap>
              <i className="iconfont icon-fdj"></i>
            <MyInput>
              搜索饿了么商家、商品名称
            </MyInput>
          </BheaderWrap>
        </HeaderWrap>
      </HomeWrap>
    )
  }
}
