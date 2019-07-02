import React, { Component } from 'react'
import '@/styles/common/fanxian.less'
export default class Fanxian extends Component {
  render() {
    return (
      <div className='discover'>
        <div className='parts'>
          <div className='left-parts'>
             <h1>金币商城</h1>
             <p>0元好物在这里</p>
             <img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt=''/>
          </div>
          <div className='right-parts'>
            <div className='tuijian'>
              <div>
                <h1>推荐有奖</h1>
                <p>20元现金拿不停</p>
              </div>
              <img src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/" alt=''/>
            </div>
            <div className='youhui'>
              <div>
                <h1>周边优惠</h1>
                <p>领取口碑好券</p>
              </div>
              <img src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/" alt=''/>
            </div>
          </div>
        </div>
        <section>
          <div className='m-header'>
            <img src={require('../../images/zxt.jpg')} alt="" />
            <img src={require('../../images/dianzhan.jpg')} alt="" />
            <h1>为你推荐</h1>
            <img src={require('../../images/yxt.jpg')} alt="" />
          </div>
        </section>
      </div>
    )
  }
}

