import React, { Component } from 'react';
import {Listul,Listul2} from './style'

class searchList2 extends Component {
  render() {
    return (
      <>
      <Listul>
      <div className='shopList'>
        <div className='Listimg'>
        <img src="//fuss10.elemecdn.com/5/a1/048cf8c4a7da6a607d0092b7722a2jpeg.jpeg?imageMogr/format/webp/thumbnail/48x/" alt=""/>
        </div>
       
        <div className='Listfont'>
           <p>杭州小笼包</p>
        <span className='ListJian'>减</span>
      <span className='Listkudi'>蜂鸟</span>
      <span className='Listpinfeng'>评价4.8</span>
        </div>
      </div>
      <div className='shopList'>
        <div className='Listimg'>
        <img src="//fuss10.elemecdn.com/5/a1/048cf8c4a7da6a607d0092b7722a2jpeg.jpeg?imageMogr/format/webp/thumbnail/48x/" alt=""/>
        </div>
       
        <div className='Listfont'>
           <p>杭州小笼包</p>
        <span className='ListJian'>减</span>
      <span className='Listkudi'>蜂鸟</span>
      <span className='Listpinfeng'>评价4.8</span>
        </div>
      </div>
      </Listul>

      <Listul2>
        <div className='Listul2'>
          <div className='iconSizi'>
            <i className='iconfont icon-fdj'> </i>
          </div>
          <div className='fontcont'>
            包子
          </div>
        </div>
      </Listul2>
      </>
    );
  }
}

export default searchList2;