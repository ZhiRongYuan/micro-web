/*
 * @Author: yuanzhirong
 * @Date: 2023-04-14 13:58:51
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-04-14 14:16:30
 * @Description:
 */
import React from "react";
import "./index.scss";
import { Link } from "react-router";

import videoPlayerIcon from "../../../../assets/video-player-icon.png";
import observer from "../../../../assets/observer.png";
import InformationPagination from "../../../information/components/pagination/index.jsx";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4],
      page: 1,
      limit: 10,
      total: 100,
    };
  }

  setPage(page) {
    this.setState({
      page,
    });
  }

  render() {
    const { videoList, page, limit, total } = this.state;
    return (
      <div className="video-list-container">
        {videoList.map((item) => {
          return (
            <Link to="video-last">
              <div className="video-list-item">
                <div className="video-list-item-img">
                  <img
                    src="https://p3.dcarimg.com/img/motor-article-img/fa6eb20b241d4f33a2a6af94c4d02758~500x0.webp"
                    alt=""
                  />
                  <img
                    src={videoPlayerIcon}
                    alt=""
                    className="video-list-item-icon"
                  />
                </div>

                <div className="video-list-item-title">
                大六座SUV新旗舰？魏牌蓝山DHT-PHEV静态体验
                </div>

                <div className="video-list-item-observer">
                  <img src={observer} alt="" />
                  <span>4.9w</span>
                  <span>评测</span>
                </div>
              </div>
            </Link>
          );
        })}

        <InformationPagination
          data={{
            page,
            limit,
            total,
          }}
          privateStyle={{
            justifyContent: "center",
            marginTop: "40px",
            marginBottom: "114px",
          }}
          setPage={(page) => this.setPage(page)}
        />
      </div>
    );
  }
}

export default VideoList;
