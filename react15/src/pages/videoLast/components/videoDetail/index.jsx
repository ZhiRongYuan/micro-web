/*
 * @Author: yuanzhirong
 * @Date: 2023-04-14 13:58:51
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-04-14 16:47:25
 * @Description:
 */
import React from "react";
import ReactPlayer from "react-player";
import "./index.scss";

import observer from "../../../../assets/observer.png";

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content:
        '<section id="article" class="jsx-3371063651 article-content"><p><span><span>“大六座”、“奶爸车”，不得不说眼下这个细分市场是真的火，除了理想L8之外，魏牌也推出了<a href="/auto/series/6206" title="蓝山DHT-PHEV" target="_blank" rel="opener">蓝山DHT-PHEV</a>(<a href="/auto/series/6206/images-wg" title="蓝山DHT-PHEV图片" target="_blank" rel="opener">图片</a>|<a href="/auto/params-carIds-88568-88575" title="蓝山DHT-PHEV配置" target="_blank" rel="opener">配置</a>|<a href="/dealer/6206?zt=dcd_pc_page_pgc_article_detail_words_guide_ask_floor_price&amp;link_source=dcd_pc_page_pgc_article_detail" title="蓝山DHT-PHEV询价" target="_blank" rel="opener">询价</a>)这款高端新能源大六座SUV，抢占奶爸车市场。</span></span></p><p><span><span>在4月正式上市前，我们抢先静态体验了一下这款车，和理想L8相比，魏牌蓝山DHT-PHEV的优势体现在哪些地方呢？</span></span></p><p><span><span>虽说是奶爸车，不过家里女主人的意见其实更为重要，所以这次我们特别派出了买买琪以女性视角体验了魏牌蓝山DHT-PHEV这款车。</span></span></p><div><img src="https://p1-dcd.byteimg.com/img/motor-article-img/a31dcf3916d64c2b81eafa945a00d679~noop.webp"><p></p></div><p><span><span>首先从尺寸来看，魏牌蓝山DHT-PHEV长*宽*高5156mm*1980mm*1805mm，轴距3050mm，空间比理想L8要大一圈。</span></span></p><div><img src="https://p3-dcd.byteimg.com/img/motor-article-img/f9e9e831e931478992f9880ff7e137ac~noop.webp"><p></p></div><p><span><span>进入车内，它的二三排中央通道底部宽度达到276mm，而理想L8中央通道宽度是220mm，魏牌蓝山DHT-PHEV的通道更宽敞，穿梭更自由一些。</span></span></p><div><img src="https://p1-dcd.byteimg.com/img/motor-article-img/6af7e7457c0c4a42a3997857c914ef19~noop.webp"><p></p></div><p><span><span>围绕“为女性用户提供专属用车关爱”，魏牌蓝山DHT-PHEV打造了女神副驾，和理想L8相比多了一些细节设置，比如副驾采用了零重力座椅，大尺寸专业美妆镜还带LED照明灯。</span></span></p><div><img src="https://p1-dcd.byteimg.com/img/motor-article-img/93716ac37a064be6ae7b18c44ae0e01b~noop.webp"><p></p></div><p><span><span>此外副驾和第二排增加了电动腿拖，第二排增加了小桌板，主驾的HUD尺寸达到了25英寸，比理想L8（13.35英寸）更大。</span></span></p><p><span><span>除了重视副驾和二排座椅的乘坐舒适度，魏牌蓝山DHT-PHEV对第三排乘客也很友好。</span></span></p><p><span><span>第三排配备了座椅加热功能，坐姿高度达到了340mm，和别克GL8很接近；三排坐垫的最大宽度达到了540mm，比理想L8/L9（515mm)更宽，靠背最大宽度也达到了540mm，优于理想L8/L9（515mm)。</span></span></p><div><img src="https://p1-dcd.byteimg.com/img/motor-article-img/3c9f3936d91042839cb80b4bb7d4d2c3~noop.webp"><p></p></div><p><span><span>除了乘坐更舒适，一二排座椅还能“躺平”秒变大床，再搭配一个气垫床，就成了露营神器。从空间布局方面来看，魏牌蓝山DHT-PHEV的可玩性确实很高。</span></span></p><div><img src="https://p1-dcd.byteimg.com/img/motor-article-img/c16e050b679f4cd6b8f2409c5004ee6d~noop.webp"><p></p></div><p><span><span>车机方面，魏牌蓝山DHT-PHEV搭载的Coffee OS 2是咖啡智能最新一代的智能座舱系统，在多模交互、地图导航、影音娱乐、生态服务、场景引擎等方面实现了全面进化，实际体验下来系统流畅度和应用程序的丰富度还是比较让人满意的。</span></span></p><p><span><span>作为一款插电式混动车，魏牌蓝山DHT-PHEV搭载的也是柠檬混动DHT技术，WLTC标准下纯电续航180km，综合续航1200km+，馈电油耗6.7L/100km。</span></span></p><p><span><span>动力方面峰值扭矩933N·m，相当于燃油车4.0排量的水平，零百加速只要4.9秒，不过这些都是官方数据，实际感受要等动态体验的时候再和大家分享了。</span></span></p><p><span><span>从空间和配置角度看，魏牌蓝山DHT-PHEV与理想L8相比有一些优势，当然最重要的还是看售价诚意如何。官方给出的预计售价在30-35万元之间，如果最终价格能再多一些惊喜，那么优势还是很大的。</span></span></p></section>',
    };
  }

  componentDidMount() {
    const { content } = this.state;
    this.refs.content.innerHTML = content;
  }

  render() {
    const { navList } = this.state;
    return (
      <div className="video-detail-container">
        <div className="video-detail-play">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=Oo_6UlD-Hww" // 将视频链接替换为您要嵌入的链接
            width="100%"
            height="100%"
            controls={true}
            range={{
              // 设置请求的范围
              headers: { Range: "bytes=0-" },
              withCredentials: false,
            }}
          />
        </div>

        <div className="video-detail-title">
          车若初见：跟理想L8掰手腕 静静试驾魏牌蓝山DHT-PHEV
        </div>

        <div className="video-detail-observer">
          <img src={observer} alt="" />
          <span>4.9w</span>
          <span>导购</span>
          <span>2020-02-02 00:00:00</span>
        </div>

        <div className="video-detail-prompt" ref="content"></div>
      </div>
    );
  }
}

export default VideoDetail;
