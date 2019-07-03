import React, { Component } from 'react';
import SearchList from './searchList';
import SearchShow from './searchShow';
import { SearchWrap, SHeadWrap, Search, Content } from './style';
import { NavLink,Route,Switch } from 'react-router-dom'

export default class search extends Component {
  render() {
    return (
      <SearchWrap>
        <SHeadWrap>
          <div className='GetBack'>
            <NavLink to='/home' className='Back'>
              <i className='iconfont icon-zjt '></i>
            </NavLink>
          </div>
          <Search>
            <i className='iconfont icon-fdj'></i>
            <input type="text" placeholder='输入商家、商品名称' />
            <NavLink to="/search/show"><button className='b-font'>搜索</button>
            </NavLink>
          </Search>
        </SHeadWrap>
        <Content>
          <Switch>
        <Route path='/search/show' component={SearchShow} />
        <Route path='/search/' component={SearchList} />
        </Switch>
        </Content>
      </SearchWrap>
    );
  }
}

