import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import { connect } from "react-redux"
import * as actions from './store/createAction'
import {
  HomeWrap,
  HeaderWrap,
  TheaderWrap,
  BheaderWrap,
  MyInput,
  HomeMapWrap,
  HomeTcenterWrap,
  HomeDetailsWrap,
  HomeIntroduceWrap,
  HomeCcenterWrap
} from './style'
import { Tabs } from 'antd'

const { TabPane } = Tabs

class Myhome extends Component {
  componentDidMount() {
    this.props.handelGetBannerList()
    this.props.handelGetSuperList()
    this.props.handelGetDetailsList()
    this.props.handelGetQualityList()
    //可以加上你需要的条件等，然后生成Swiper对象，
    //一定要检查是不是每次都生成了Swiper对象，否则可能出现不滑动的情况和别的情况等
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },

      observer: true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents: true,//修改swiper的父元素时，自动初始化swiper
    });
  }

  render() {
    return (

      <HomeWrap>
        <HeaderWrap>
          <TheaderWrap>
            <i className="iconfont icon-weizhi"></i>
            福中三路深圳市名
          </TheaderWrap>
          <BheaderWrap>
            <i className="iconfont icon-fdj"></i>
            <MyInput>
              搜索饿了么商家、商品名称
            </MyInput>
          </BheaderWrap>
        </HeaderWrap>


        <HomeMapWrap>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                {
                  this.props.bannerList.map((item, index) => {
                    return (
                      <div key={item.id}>
                        <img src={item.img} alt="" />
                        <span>{item.name}</span>
                      </div>
                    )
                  })
                }

              </div>
              <div className="swiper-slide">
                {
                  this.props.superList.map(item => {
                    return (
                      <div key={item.id}>
                        <img src={item.img} alt="" />
                        <span>{item.name}</span>
                      </div>
                    )
                  })
                }
              </div>

            </div>
            {/* <!-- 如果需要分页器 --> */}
            <div className="swiper-pagination"></div>
          </div>
        </HomeMapWrap>
        <HomeTcenterWrap>
          <span></span>
          推荐商家
           <span></span>
        </HomeTcenterWrap>
        <HomeCcenterWrap>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="距离最近" key="1">

              {
                this.props.datalisList.map(item => {
                  return (
                    <HomeDetailsWrap key={item.id}>
                      <p>
                        <img src={item.img} alt={item.name} />
                      </p>
                      <HomeIntroduceWrap>
                        <p>
                          <span>{item.name}</span>
                          <span><i className="iconfont icon-44">...</i></span>
                        </p>
                        <p>
                          <span></span>
                          <span>{item.sale}</span>
                        </p>
                        <p>
                          <span>{item.flavors}</span>
                          <span></span>
                          <span>{item.delivery}</span>
                          <span>{item.distance}m</span>
                          <span></span>
                          <span>{item.order_lead_time}分钟</span>
                        </p>
                        <p>
                          <span>{item.coffe}</span>
                          <span>{item.text}</span>
                        </p>
                        <p>
                          <span>{item.icon_name1}</span>
                          <span>{item.tips}</span>
                          <span>5个活动</span>
                          <span></span>
                        </p>
                        <p>
                          <span>{item.icon_name2}</span>
                          <span>{item.name1}</span>
                        </p>
                      </HomeIntroduceWrap>
                    </HomeDetailsWrap>
                  )
                })
              }


            </TabPane>
            <TabPane tab="品质联盟" key="2">
              {
                this.props.qualityList.map(item => {
                  return (
                    <HomeDetailsWrap key={item.id}>
                      <p>
                        <img src={item.img} alt={item.name} />
                      </p>
                      <HomeIntroduceWrap>
                        <p>
                          <span>{item.name}</span>
                          <span><i className="iconfont icon-44">...</i></span>
                        </p>
                        <p>
                          <span></span>
                          <span>{item.sale}</span>
                        </p>
                        <p>
                          <span>{item.flavors}</span>
                          <span></span>
                          <span>{item.delivery}</span>
                          <span>{item.distance}km</span>
                          <span></span>
                          <span>{item.order_lead_time}分钟</span>
                        </p>
                        <p>
                          <span>{item.cuisine}</span>
                          <span>{item.text}</span>
                        </p>
                        <p>
                          <span>{item.icon_name1}</span>
                          <span>{item.tips}</span>
                          <span>5个活动</span>
                          <span></span>
                        </p>
                        <p>
                          <span>{item.icon_name2}</span>
                          <span>{item.name1}</span>
                        </p>
                      </HomeIntroduceWrap>
                    </HomeDetailsWrap>
                  )
                })
              }
            </TabPane>

          </Tabs>

        </HomeCcenterWrap>
      </HomeWrap>

    )
  }
}
const mapStateToProps = ({ myHome }) => {
  return {
    bannerList: myHome.bannerList,
    superList: myHome.superList,
    datalisList: myHome.datalisList,
    qualityList: myHome.qualityList
  }
}
const mapDisptachToProps = (dispatch) => {
  return {
    handelGetBannerList () {
      dispatch(actions.axiosGetBannerList())
    },
    handelGetSuperList () {
      dispatch(actions.axiosGetSuperList())
    },
    handelGetDetailsList () {
      dispatch(actions.axiosGetDetailsList())
    },
    handelGetQualityList () {
      dispatch(actions.axiosGetQualityList())
    }
  }
}
export default connect(mapStateToProps, mapDisptachToProps)(Myhome)

