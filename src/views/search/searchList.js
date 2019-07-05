import React, { Component } from 'react';
import {History,HistoryList, HotList} from './style';
class searchList extends Component {
  render() {
    return (
      <>
      <History>
      <div className='SeaHistory'>
        <span className='H-fsz'>历史搜索</span>
        <i className='iconfont icon-cz'></i>
        </div>
        <HistoryList>
        <div className='H-list'>包子</div>
        <div className='H-list'>包子</div>
        <div className='H-list'>包子</div>
        <div className='H-list'>包子</div>
        <div className='H-list'>包子</div>
        <div className='H-list'>包子</div>
        <div className='H-list'>包子1111111</div>
      </HistoryList>
    </History>
    <HotList>
      <div>
        <span className='Hot-fsz'>热门搜索</span>
      </div>
      <HistoryList>
      <div className='H-list'>一点点</div>
      </HistoryList>

   </HotList>
      </>
    );
  }
}

export default searchList;