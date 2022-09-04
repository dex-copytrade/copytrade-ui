import { FC } from "react";
import { ArrowRightOutlined } from '@ant-design/icons';
import './index.less'


export interface ItemProps {
  firstTitle: string
  secondTitle: string
}

export const CardItem: FC<ItemProps> = (props) => {
  const { firstTitle, secondTitle } = props

  return (
    <div className="carditem-large-warp">
      <div className='df aic carditem-head'>
        <div className="f1">
          <p className="fs20 fw c-black">{firstTitle}</p>
          <p className="lh32">{secondTitle}</p>
        </div>
        <div className="btn text">See more <ArrowRightOutlined style={{color: '#F7A600' }}/></div>
      </div>
      <div className="carditem-list df">
        <div className="carditem">
          <div className="fs20 fw c-black name">
            <label>No.01</label>
            <div className="bg-icon">Q323a3....23ky</div>
          </div>
          <div className="df mb24 plr24">
            <div>近7天收益率<p className="fs24 c-green">88.69%</p></div>
            <div>近7天胜率<p className="fs24 c-green">90.33%</p></div>
          </div>
          <div className="df plr24">
            <div>累计跟单总人数<p className="fs18 c-black">150</p></div>
            <div>历史最大回撤<p className="fs18 c-black">50%</p></div>
            <div>累计跟单总收益<p className="fs18 c-green">+1390.33%</p></div>
          </div>
          <div className="plr24 mt20">
            <div className="btn primary large">Follow</div>
          </div>
        </div>
        <div className="carditem">
          <div className="fs20 fw c-black name">
            <label>No.01</label>
            <div className="bg-icon">Q323a3....23ky</div>
          </div>
          <div className="df mb24 plr24">
            <div>近7天收益率<p className="fs24 c-green">88.69%</p></div>
            <div>近7天胜率<p className="fs24 c-green">90.33%</p></div>
          </div>
          <div className="df plr24">
            <div>累计跟单总人数<p className="fs18 c-black">150</p></div>
            <div>历史最大回撤<p className="fs18 c-black">50%</p></div>
            <div>累计跟单总收益<p className="fs18 c-green">+1390.33%</p></div>
          </div>
          <div className="plr24 mt20">
            <div className="btn primary large">Follow</div>
          </div>
        </div>
        <div className="carditem">
          <div className="fs20 fw c-black name">
            <label>No.01</label>
            <div className="bg-icon">Q323a3....23ky</div>
          </div>
          <div className="df mb24 plr24">
            <div>近7天收益率<p className="fs24 c-green">88.69%</p></div>
            <div>近7天胜率<p className="fs24 c-green">90.33%</p></div>
          </div>
          <div className="df plr24">
            <div>累计跟单总人数<p className="fs18 c-black">150</p></div>
            <div>历史最大回撤<p className="fs18 c-black">50%</p></div>
            <div>累计跟单总收益<p className="fs18 c-green">+1390.33%</p></div>
          </div>
          <div className="plr24 mt20">
            <div className="btn primary large">Follow</div>
          </div>
        </div>
      </div>
      
    </div>
  )
};

export default CardItem;