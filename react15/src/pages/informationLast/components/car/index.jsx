/*
 * @Author: yuanzhirong
 * @Date: 2023-04-14 13:58:51
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-04-14 14:06:24
 * @Description:
 */
import React from "react";
import "./index.scss";

class InformationLastCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="information-last-car">
        <div className="information-last-car-detail">
          <div className="information-last-car-img">
            <img
              src="https://p3.dcarimg.com/img/motor-article-img/497b7a1faee44ceabadb6b095fd10890~500x0.webp"
              alt=""
            />
          </div>
          <div className="information-last-car-price">
            <div>高尔夫</div>
            <div>26.98-55.44万</div>
          </div>
        </div>

        <div className="information-last-car-button">询底价</div>
      </div>
    );
  }
}

export default InformationLastCar;
