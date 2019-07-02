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
            <img src={require('../../../images/zxt.jpg')} alt="" className='img01'/>
            <img src={require('../../../images/dianzhan.jpg')} alt="" />
            <h1>为你推荐</h1>
            <img src={require('../../../images/yxt.jpg')} alt="" className='img01'/>
            <p>你的口味,我都懂得</p>
          </div>
          <div className='m-sales'>
            <div className='sales-info'>
              <img src="https://fuss10.elemecdn.com/1/a3/3d78e0783b5b74ea767855dd2a8a7jpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/" alt=''/>
              <h2>特色蜜汁烤肉拌饭</h2>
              <div className='s-num'>
                <span>月销170份</span>
                <span>好评率94%</span>
              </div>
              <div className='s-price'>
                <span className='price-info'>¥27.8</span>
                <span className='price-yh'>满18减14</span>
              </div>
              <div className='sales-addr'>
              <img src={require('../../../images/naozhong.jpg')} alt="" />
                <span>辣皇尚麻辣香锅(后瑞壹航城店)</span>
              </div>
            </div>
            <div className='sales-info'>
              <img src="https://fuss10.elemecdn.com/1/a3/3d78e0783b5b74ea767855dd2a8a7jpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/" alt=''/>
              <h2>特色蜜汁烤肉拌饭</h2>
              <div className='s-num'>
                <span>月销170份</span>
                <span>好评率94%</span>
              </div>
              <div className='s-price'>
                <span className='price-info'>¥27.8</span>
                <span className='price-yh'>满18减14</span>
              </div>
              <div className='sales-addr'>
                <img src={require('../../../images/sales.jpg')} alt="" />
                <span>辣皇尚麻辣香锅(后瑞壹航城店)</span>
              </div>
            </div>
            <div className='sales-info'>
              <img src="https://fuss10.elemecdn.com/1/a3/3d78e0783b5b74ea767855dd2a8a7jpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/" alt=''/>
              <h2>特色蜜汁烤肉拌饭</h2>
              <div className='s-num'>
                <span>月销170份</span>
                <span>好评率94%</span>
              </div>
              <div className='s-price'>
                <span className='price-info'>¥27.8</span>
                <span className='price-yh'>满18减14</span>
              </div>
              <div className='sales-addr'>
                <img src={require('../../../images/sales.jpg')} alt="" />
                <span>辣皇尚麻辣香锅(后瑞壹航城店)</span>
              </div>
            </div>
            <div className='sales-info'>
              <img src="https://fuss10.elemecdn.com/1/a3/3d78e0783b5b74ea767855dd2a8a7jpeg.jpeg?imageMogr/format/webp/thumbnail/!345x345r/gravity/Center/crop/345x345/" alt=''/>
              <h2>特色蜜汁烤肉拌饭</h2>
              <div className='s-num'>
                <span>月销170份</span>
                <span>好评率94%</span>
              </div>
              <div className='s-price'>
                <span className='price-info'>¥27.8</span>
                <span className='price-yh'>满18减14</span>
              </div>
              <div className='sales-addr'>
              <img src={require('../../../images/sales.jpg')} alt="" />
                <span>辣皇尚麻辣香锅(后瑞壹航城店)</span>
              </div>
            </div>
          </div>
          <p className='more'>查看更多 ></p>
        </section>
        <div className='giftbox'>
          <div className='g-header'>
              <img src={require('../../../images/zxt.jpg')} alt="" className='img01'/>
              <img src={require('../../../images/naozhong.jpg')} alt="" />
              <h1>限时好礼</h1>
              <img src={require('../../../images/yxt.jpg')} alt="" className='img01'/>
              <p>金币换豪礼</p>
            </div>
          <div className='gitf-info'>
            <div className='info-box'>
              <div className='img-box'>
                <span>限时优惠</span>
                <img src="https://fuss10.elemecdn.com/5/78/5c1ca7ceca079926933ca418c9eb7jpeg.jpeg?imageMogr/format/webp/" alt='' />
              </div>
              <p>3元品质联盟红包</p>
              <div className='food-price'>
                <span className='price'>90金币</span>
                <span className='price-you'>¥3</span>
              </div>
            </div>
            <div className='info-box'>
              <div className='img-box'>
                <span>限时优惠</span>
                <img src="https://fuss10.elemecdn.com/5/78/5c1ca7ceca079926933ca418c9eb7jpeg.jpeg?imageMogr/format/webp/" alt='' />
              </div>
              <p>3元品质联盟红包</p>
              <div className='food-price'>
                <span className='price'>90金币</span>
                <span className='price-you'>¥3</span>
              </div>
            </div>
            <div className='info-box'>
              <div className='img-box'>
                <span>限时优惠</span>
                <img src="https://fuss10.elemecdn.com/5/78/5c1ca7ceca079926933ca418c9eb7jpeg.jpeg?imageMogr/format/webp/" alt='' />
              </div>
              <p>3元品质联盟红包</p>
              <div className='food-price'>
                <span className='price'>90金币</span>
                <span className='price-you'>¥3</span>
              </div>
            </div>
          </div>
          <p className='more'>查看更多 ></p>
        </div>
        <p className='bot'></p>
      </div>
    )
  }
}

