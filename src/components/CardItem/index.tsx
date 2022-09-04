import { FC, useState } from "react";
import { ArrowRightOutlined } from '@ant-design/icons';
import './index.less'


export interface ItemProps {
  firstTitle: string
  secondTitle: string
}

export const CardItem: FC<ItemProps> = (props) => {
  const { firstTitle, secondTitle } = props
  const [isMore, setIsMore] = useState(false)

  const handleShowAll = () =>{
    setIsMore(true)
  }

  return (
    <div className="carditem-warp">
      <div className='df aic carditem-head'>
        <div className="f1">
          <p className="fs20 fw c-black">{firstTitle}</p>
          <p className="lh32">{secondTitle}</p>
        </div>
        <div className="btn text" onClick={handleShowAll}>See more <ArrowRightOutlined style={{color: '#F7A600' }}/></div>
      </div>
      <div className={`carditem-list df ${isMore ? '' : 'showAll'}`}>
        <div className="carditem">
          <div className="fs20 fw c-black pb10">Q323a3....23ky</div>
          <div className="df pb10">
            <div>近30天收益率<p className="fs24 fw c-green">88.69%</p></div>
            <div>近30天胜率<p className="fs24 fw c-green">90.33%</p></div>
          </div>
          <div className="carditem-li">
            <div><p>历史最大回撤</p><em className="fs14 c-black">50%</em></div>
            <div><p>累计跟单人数</p><em className="fs14 c-black">1500</em></div>
            <div><p>累计跟单收益</p><em className="fs14 c-green fw">+138,355,99</em></div>
          </div>
          <div className="btn primary large mt24">Follow</div>
        </div>
        <div className="carditem">
          <div className="fs20 fw c-black pb10">Q323a3....23ky</div>
          <div className="df pb10">
            <div>近30天收益率<p className="fs24 fw c-green">88.69%</p></div>
            <div>近30天胜率<p className="fs24 fw c-green">90.33%</p></div>
          </div>
          <div className="carditem-li">
            <div><p>历史最大回撤</p><em className="fs14 c-black">50%</em></div>
            <div><p>累计跟单人数</p><em className="fs14 c-black">1500</em></div>
            <div><p>累计跟单收益</p><em className="fs14 c-green fw">+138,355,99</em></div>
          </div>
          <div className="btn primary large mt24">Follow</div>
        </div>
        <div className="carditem">
          <div className="fs20 fw c-black pb10">Q323a3....23ky</div>
          <div className="df pb10">
            <div>近30天收益率<p className="fs24 fw c-green">88.69%</p></div>
            <div>近30天胜率<p className="fs24 fw c-green">90.33%</p></div>
          </div>
          <div className="carditem-li">
            <div><p>历史最大回撤</p><em className="fs14 c-black">50%</em></div>
            <div><p>累计跟单人数</p><em className="fs14 c-black">1500</em></div>
            <div><p>累计跟单收益</p><em className="fs14 c-green fw">+138,355,99</em></div>
          </div>
          <div className="btn primary large mt24">Follow</div>
        </div>
        <div className="carditem">
          <div className="fs20 fw c-black pb10">Q323a3....23ky</div>
          <div className="df pb10">
            <div>近30天收益率<p className="fs24 fw c-green">88.69%</p></div>
            <div>近30天胜率<p className="fs24 fw c-green">90.33%</p></div>
          </div>
          <div className="carditem-li">
            <div><p>历史最大回撤</p><em className="fs14 c-black">50%</em></div>
            <div><p>累计跟单人数</p><em className="fs14 c-black">1500</em></div>
            <div><p>累计跟单收益</p><em className="fs14 c-green fw">+138,355,99</em></div>
          </div>
          <div className="btn primary large mt24">Follow</div>
        </div>
        <div className="carditem">
          <div className="fs20 fw c-black pb10">Q323a3....23ky</div>
          <div className="df pb10">
            <div>近30天收益率<p className="fs24 fw c-green">88.69%</p></div>
            <div>近30天胜率<p className="fs24 fw c-green">90.33%</p></div>
          </div>
          <div className="carditem-li">
            <div><p>历史最大回撤</p><em className="fs14 c-black">50%</em></div>
            <div><p>累计跟单人数</p><em className="fs14 c-black">1500</em></div>
            <div><p>累计跟单收益</p><em className="fs14 c-green fw">+138,355,99</em></div>
          </div>
          <div className="btn primary large mt24">Follow</div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
};

export default CardItem;