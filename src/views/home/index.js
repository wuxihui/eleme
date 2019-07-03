import React, { Component } from 'react'
import {HomeWrap,HomeFooterWrap,
  LeftFooterWrap,
  PleftFooterWrap,
  CenterFooterWrap,
  RightFooterWrap 
} from './style'
import {Route, Switch,Redirect,NavLink } from 'react-router-dom'
import Loadable from 'react-loadable'


const Myhome = Loadable({
  loader: () => import('./myhome'),
  loading: () => <div>加载中...</div>

})
const Fanxian = Loadable({
  loader: () => import('./fanxian'),
  loading: () => <div>加载中...</div>

})
const Order = Loadable({
  loader: () => import('./order'),
  loading: () => <div>加载中...</div>
})
const Center = Loadable({
  loader: () => import('./center'),
  loading: () => <div>加载中...</div>
})


export default class Home extends Component {
  render() {
    return (
      <HomeWrap>
        <HomeFooterWrap>
          <LeftFooterWrap>
            <NavLink to="/home">
              <i className="iconfont icon-sy"></i>
              首页
            </NavLink>
          </LeftFooterWrap>
          <PleftFooterWrap>
            <NavLink to="/fanxian">
              <i className="iconfont icon-fx"></i>
              发现
            </NavLink>
          </PleftFooterWrap>
          <CenterFooterWrap>
            <NavLink to="/order">
              <i className="iconfont icon-dd"></i>
              订单
            </NavLink>
          </CenterFooterWrap>
          <RightFooterWrap>
            <NavLink to="/center">
              <i className="iconfont icon-wd"></i>
              我的
            </NavLink>
          </RightFooterWrap>
        </HomeFooterWrap>
        <Switch>
          <Route path='/myhome' component={Myhome}></Route>
          <Route path='/fanxian' component={Fanxian}></Route>
          <Route path='/order' component={Order}></Route>
          <Route path='/center' component={Center}></Route>
          <Redirect to='/myhome'/>
        </Switch>
      </HomeWrap>

    )
  }
}

// import { Tabs } from 'antd';

// const { TabPane } = Tabs;

// function callback(key) {
//   console.log(key);
// }

// ReactDOM.render(
//   <Tabs defaultActiveKey="1" onChange={callback}>
//     <TabPane tab="Tab 1" key="1">
//       Content of Tab Pane 1
//     </TabPane>
//     <TabPane tab="Tab 2" key="2">
//       Content of Tab Pane 2
//     </TabPane>
//     <TabPane tab="Tab 3" key="3">
//       Content of Tab Pane 3
//     </TabPane>
//   </Tabs>,
//   mountNode,
// );

