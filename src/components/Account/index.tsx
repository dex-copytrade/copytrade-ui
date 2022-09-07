import { FC, useState } from "react";
import './index.less'

export const CardItem: FC = () => {
 
  return (
    <div className="br8 asset-wrap pad24">
      <div className="df">
        <div className="f1 df aic">
          <div className="fw fs18 mr16">CQ3232432...323</div>
          <div className="c999">累计收益总排行&nbsp;<span className="fw c-black">No.03</span></div>
        </div>
        <div className="btn line2 mr16">订阅</div>
        <div className="btn primary">跟单</div>
      </div>
      <div className="g-df df list">
        <div>总资产<p>1503,433,546,5455 USDT</p></div>
        <div>当前持仓价值<p>433,546,5455 USDT</p></div>
        <div>当前跟单人数<p>903</p></div>
      </div>
    </div>
  )
};

export default CardItem;