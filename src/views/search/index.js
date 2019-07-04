import React, { Component } from 'react';
import SearchList from './searchList';
import SearchList2 from './searchList2';
import SearchShow from './searchShow';
import { SearchWrap, SHeadWrap, Search, Content } from './style';
import { NavLink,Route,Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from './store/actionCreate'

class search extends Component {
  render() {
    console.log(this.props.inputVal)
    const inputWho = this.props.inputVal.trim()
    const showWho = inputWho?<SearchList2 />:<SearchList />
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
            <input type="text" placeholder='输入商家、商品名称'
             value={this.props.inputVal} 
             onChange={this.onChgInput}
             />
            <NavLink to="/search/show"><button className='b-font'>搜索</button>
            </NavLink>
          </Search>
        </SHeadWrap>
      


        <Content>
          {
            showWho
          }
          <Switch>
            <Route path='/search/show' component={SearchShow} />
        </Switch>
        </Content>
      </SearchWrap>
    );
  }
  onChgInput=(event)=>{
    const Value = event.target.value;
    this.props.setInputVal(Value);
    this.props.getStudentList(Value);
  }
}

export default connect(
  (state) => ({
    inputVal: state.search.inputVal
  }),
  (dispatch) => ({
    setInputVal(Value){
      dispatch(actions.SetInputVal(Value))
    },
    getStudentList(Value){
      dispatch(actions.onStudentList(Value));
    }
  })
  )(search)





