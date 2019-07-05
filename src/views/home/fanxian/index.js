import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "@/styles/common/fanxian.less";
import * as actions from "./store/actionCreates";
class Fanxian extends Component {
  render() {
    return (
      <div className="discover">
        <div className="parts">
          <Link to="/coil" className="left-parts">
              <h1>金币商城</h1>
              <p>0元好物在这里</p>
              <img
                src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/"
                alt=""
              />
          </Link>
          <div className="right-parts">
            <Link to="/prize" className="tuijian">
              <div>
                <h1>推荐有奖</h1>
                <p>20元现金拿不停</p>
              </div>
              <img
                src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/"
                alt=""
              />
            </Link>
            <Link to='/favourable' className="youhui">
              <div>
                <h1>周边优惠</h1>
                <p>领取口碑好券</p>
              </div>
              <img
                src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/"
                alt=""
              />
            </Link>
          </div>
        </div>
        <section>
          <div className="m-header">
            <img src={require("./images/zxt.jpg")} alt="" className="img01" />
            <img src={require("./images/dianzhan.jpg")} alt="" />
            <h1>为你推荐</h1>
            <img src={require("./images/yxt.jpg")} alt="" className="img01" />
            <p>你的口味,我都懂得</p>
          </div>
          <div className="m-sales">
            {this.props.foodList.map(item => {
              return (
                <div className="sales-info" key={item.food.food_id}>
                  <img src={item.food.image_path} alt="" />
                  <h2>{item.food.name}</h2>
                  <div className="s-num">
                    <span>月售{item.food.month_sales}份</span>&nbsp;&nbsp;
                    <span>好评率{item.food.satisfy_rate}%</span>
                  </div>
                  <div className="s-price">
                    <span className="price-info">¥{item.food.price}</span>
                    {item.food.discount_activity ? (
                      <span className="price-yh">
                        {item.food.discount_activity}
                      </span>
                    ) : null}
                    {item.food.original_price ? (
                      <span className="price-you">
                        {"¥" + item.food.original_price}
                      </span>
                    ) : null}
                  </div>
                  <div className="sales-addr">
                    <img src={require("./images/sales.jpg")} alt="" />
                    <span>{item.food.restaurant_name}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="more">查看更多 ></p>
        </section>
        <div className="giftbox">
          <div className="g-header">
            <img src={require("./images/zxt.jpg")} alt="" className="img01" />
            <img src={require("./images/naozhong.jpg")} alt="" />
            <h1>限时好礼</h1>
            <img src={require("./images/yxt.jpg")} alt="" className="img01" />
            <p>金币换豪礼</p>
          </div>
          <div className="gitf-info">
            <div className="info-box">
              <div className="img-box">
                <span>限时优惠</span>
                <img
                  src="https://fuss10.elemecdn.com/7/ec/adf8ae0fd52a0eb56f4332fb61ac2jpeg.jpeg?imageMogr/format/webp/"
                  alt=""
                />
              </div>
              <p>3元品质联盟红包</p>
              <div className="food-price">
                <span className="price">90金币</span>
                <span className="price-you">¥3</span>
              </div>
            </div>
            <div className="info-box">
              <div className="img-box">
                <span>限时优惠</span>
                <img
                  src="https://fuss10.elemecdn.com/e/b5/605a11eae79849240113271dd1b94jpeg.jpeg?imageMogr/format/webp/"
                  alt=""
                />
              </div>
              <p>3元品质联盟红包</p>
              <div className="food-price">
                <span className="price">9金币</span>
                <span className="price-you">¥3</span>
              </div>
            </div>
            <div className="info-box">
              <div className="img-box">
                <span>限时优惠</span>
                <img
                  src="https://fuss10.elemecdn.com/5/78/5c1ca7ceca079926933ca418c9eb7jpeg.jpeg?imageMogr/format/webp/"
                  alt=""
                />
              </div>
              <p>3元品质联盟红包</p>
              <div className="food-price">
                <span className="price">9金币</span>
                <span className="price-you">¥3</span>
              </div>
            </div>
          </div>
          <p className="more">查看更多 ></p>
        </div>
        <p className="bot" />
      </div>
    );
  }
  componentDidMount() {
    this.props.handleGetFanxianFoodList();
  }
}
export default connect(
  ({ fanxian }) => ({
    foodList: fanxian.foodList
  }),
  dispatch => ({
    handleGetFanxianFoodList() {
      dispatch(actions.asyncFanxianFood());
    }
  })
)(Fanxian);
