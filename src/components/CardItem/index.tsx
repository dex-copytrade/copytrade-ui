import { FC, useState } from "react";
import { ArrowRightOutlined } from '@ant-design/icons';
import './index.less'


export interface propsMode {
  firstTitle?: string
  secondTitle?: string
  isHasMore?: boolean
}

export const CardItem: FC<propsMode> = (props) => {
  const { firstTitle, secondTitle, isHasMore = true} = props
  const [isMore, setIsMore] = useState(false)

  const handleShowAll = () =>{
    setIsMore(true)
  }

  const gotoDetail = (id:any) =>{
    window.location.href = `/traderdetail?id=${id}`
  }

  const gotoFollow = () =>{
    window.location.href = '/translog'
  }

  return (
    <div className="carditem-warp">
      <div className='df aic carditem-head'>
        <div className="f1">
          <p className="fs20 fw c-black">{firstTitle}</p>
          <p className="lh32">{secondTitle}</p>
        </div>
        {isHasMore && <div className="btn text" onClick={handleShowAll}>See more <ArrowRightOutlined style={{color: '#F7A600' }}/></div>}
      </div>
      <div className={`carditem-list df ${isMore ? '' : 'showAll'}`}>
        <div className="carditem">
          <div onClick={()=>gotoDetail('Q323a3....23ky')}>
            <div className="fs20 fw c-black pb10">Q323a3....23ky</div>
            <div className="df pb10">
              <div>近30天收益率<p className="fs24 fw c-green">88.69%</p></div>
              <div>近30天胜率<p className="fs24 fw c-green">90.33%</p></div>
            </div>
            <div className="g-list">
              <ul className="lh22">
                <li>历史最大回撤<p>322</p></li>
                <li>累计跟单人数<p>+50%</p></li>
                <li>累计跟单收益<p className="c-green">8723</p></li>
              </ul>
            </div>
          </div>
          <div className="btn primary large mt24" onClick={gotoFollow}>Follow</div>
        </div>
      </div>
    </div>
  )
};

export default CardItem;