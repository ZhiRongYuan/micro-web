/*
 * @Author: yuanzhirong
 * @Date: 2023-04-14 13:58:51
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-04-14 15:15:24
 * @Description:
 */
import React from "react";
import "./index.scss";

import NoPraise from "../../../../assets/no-praise.png";
import blueArrow from "../../../../assets/blue-arrow.png";

class HotVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          img: "https://p3.dcarimg.com/img/tos-cn-i-dcdx/a0128fa0981e4a9484e2ec7932cd4ba2~1232x0.webp",
          title: "动力无限,梦想无限",
          number: "3026",
          type: "导购",
          status: true,
        },
        {
          img: "https://p3.dcarimg.com/img/tos-cn-i-dcdx/a0128fa0981e4a9484e2ec7932cd4ba2~1232x0.webp",
          title: "动力无限,梦想无限",
          number: "3026",
          type: "导购",
          status: true,
        },
        {
          img: "https://p3.dcarimg.com/img/tos-cn-i-dcdx/a0128fa0981e4a9484e2ec7932cd4ba2~1232x0.webp",
          title: "动力无限,梦想无限",
          number: "3026",
          type: "导购",
          status: true,
        },
        {
          img: "https://p3.dcarimg.com/img/tos-cn-i-dcdx/a0128fa0981e4a9484e2ec7932cd4ba2~1232x0.webp",
          title: "动力无限,梦想无限",
          number: "3026",
          type: "导购",
          status: true,
        },
        {
          img: "https://p3.dcarimg.com/img/tos-cn-i-dcdx/a0128fa0981e4a9484e2ec7932cd4ba2~1232x0.webp",
          title: "动力无限,梦想无限",
          number: "3026",
          type: "导购",
          status: true,
        },
      ],
    };
  }

  render() {
    const { list } = this.state;
    return (
      <div className="hot-video-container">
        <div className="hot-video-title">热门视频推荐</div>
        <div className="hot-video-list">
          {list.map((item) => {
            return (
              <div className="hot-video-item">
                <div className="hot-video-item-img">
                  <img src={item.img} alt="" />
                </div>
                <div>
                  <div className="hot-video-item-title">{item.title}</div>
                  <div className="hot-video-item-operation">
                    <span>{item.type}</span>
                    <span>
                      <img src={NoPraise} alt="" />
                      10
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="hot-video-button">
          展开全部10条
          <img src={blueArrow} alt="" />
        </div>
      </div>
    );
  }
}

export default HotVideo;
