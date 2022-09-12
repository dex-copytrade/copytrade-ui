import { FC, useState } from "react";
import { ArrowRightOutlined } from '@ant-design/icons';
import './index.less'
import { hanlderJump } from "../../utils";

const format = (str: string) => {
  return `${str.slice(0,5)}....${str.slice(str.length - 5,str.length)}`
}


export interface propsMode {
  firstTitle?: string
  secondTitle?: string
  isHasMore?: boolean
  list?: Array<any>
  unSubList?: any
}

export const CardItem: FC<propsMode> = (props) => {
  const { firstTitle, secondTitle, isHasMore = true, list, unSubList} = props
  const [isMore, setIsMore] = useState(false)

  const handleShowAll = () =>{
    setIsMore(true)
  }

  const onClick = (item: any) => {
    if(isHasMore) {
      hanlderJump('traderdetail',{id: item.account})
    } else {
      unSubList?.(item.account)
    }
  }

  const listItme = () => {
    return list?.map((item) => {
      return (
        <div className="carditem" key={item.account}>
        <div onClick={()=>hanlderJump('traderdetail',{id: item.account})}>
          <div className="fs20 fw c-black pb10">{format(item.account)}</div>
          <div className="df pb10">
            <div>总盈利收益<p className="fs24 fw c-green" style={{marginRight: 10}}>{Number(item.profitSettlements).toFixed(2)}</p></div>
            <div className="tar">近30天胜率<p className="fs24 fw c-green">{Number(item.winRate * 100).toFixed(2)}%</p></div>
          </div>
          <div className="g-list">
            <ul className="lh22">
            <li>累计跟单总人数<p>{item.copyCount}</p></li>
            <li>历史最大回撤<p>{Number(Number(item.drawdownRate).toFixed(2)) * 100}%</p></li>
            <li>累计跟单总收益<p className="c-green">{Number(item.totalRevenue).toFixed(2)}</p></li>
            </ul>
          </div>
        </div>
        <div className="btn primary large mt24" onClick={() => onClick(item)}>{
          isHasMore ? 'Follow' : ' Cancel Follow'
        }</div>
      </div>
      )
    })
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
       {listItme()}
      </div>
    </div>
  )
};

export default CardItem;