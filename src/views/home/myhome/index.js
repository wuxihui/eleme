import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import {
  HomeWrap,
  HeaderWrap,
  TheaderWrap,
  BheaderWrap,
  MyInput,
  HomeMapWrap,
  HomeTcenterWrap,
  HomeCcenterWrap
} from './style'
import { Tabs } from 'antd'

const { TabPane } = Tabs

export default class Myhome extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bannerList: [
        { "img": "https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90", "title": "美食" },
        { "img": "https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90", "title": "美食" },
        { "img": "https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90", "title": "美食" },
        { "img": "https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90", "title": "美食" },
        { "img": "https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90", "title": "美食" },
        { "img": "https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90", "title": "美食" },
        { "img": "https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90", "title": "美食" },
        { "img": "https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90", "title": "美食" },
        { "img": "https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90", "title": "美食" },
        { "img": "https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90", "title": "美食" }
      ],
      superList: [
        { "img": "https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90", "title": "地方小吃" },
        { "img": "https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90", "title": "地方小吃" },
        { "img": "https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90", "title": "地方小吃" },
        { "img": "https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90", "title": "地方小吃" }
      ]
    }
  }

  componentDidMount() {
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
                  this.state.bannerList.map((item, index) => {
                    return (
                      <div key={index}>
                        <img src={item.img} alt="" />
                        <span>{item.title}</span>
                      </div>
                    )
                  })
                }

              </div>
              <div className="swiper-slide">
                {
                  this.state.superList.map((item, index) => {
                    return (
                      <div key={index}>
                        <img src={item.img} alt="" />
                        <span>{item.title}</span>
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
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
    </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
    </TabPane>

        </Tabs>
</HomeCcenterWrap>

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

