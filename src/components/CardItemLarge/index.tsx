import { FC } from "react";
import { hanlderJump } from "../../utils";
import './index.less'

const format = (str: string) => {
  return `${str.slice(0,5)}....${str.slice(str.length - 5,str.length)}`
}


export interface ItemProps {
  firstTitle: string
  secondTitle: string
  list: Array<any>
}

export const CardItem: FC<ItemProps> = (props) => {
  const { firstTitle, secondTitle, list } = props

  const listItme = () => {
    return list.map((item, index) => {
      return (
        <div className="carditem" key={item.account} onClick={()=>hanlderJump('traderdetail',{id: item.account})}>
          <div className="fs20 fw c-black name" >
            <label>No.0{index + 1}</label>
            <div className="bg-icon">{format(item.account)}</div>
          </div>
          <div className="df mb24 plr24">
            <div>总盈利收益<p className="fs24 fw c-green" style={{marginRight: 114}}>{Number(item.profitSettlements).toFixed(2)}</p></div>
            <div>近7天胜率<p className="fs24 fw c-green">{item.winRate * 100}%</p></div>
          </div>
          <div className="g-df df plr24">
            <div>累计跟单总人数<p>{item.copyCount}</p></div>
            <div>历史最大回撤<p>{item.drawdownRate * 100}%</p></div>
            <div>累计跟单总收益<p className="c-green">{Number(item.totalRevenue).toFixed(2)}</p></div>
          </div>
          <div className="plr24 mt20">
            <div className="btn primary large">Follow</div>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="carditem-large-warp">
      <div className='df aic carditem-head'>
        <div className="f1">
          <p className="fs20 fw c-black">{firstTitle}</p>
          <p className="lh32">{secondTitle}</p>
        </div>
      </div>
      <div className="carditem-list df">
        {listItme()}
        
      </div>
      
    </div>
  )
};

export default CardItem;