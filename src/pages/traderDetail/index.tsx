import { FC, useEffect, useState } from "react";
import Header from '../../components/Header'
import Account from '../../components/Account'
import { LeftOutlined } from '@ant-design/icons';
import './index.less'
import { get } from "../../utils/http";
import { useLocation } from 'react-router'
import { hanlderJump, GetQueryString } from '../../utils';


const TraderList: FC = () => {

  const location = useLocation()

  const [account] = useState<any>(() => location.search.split('=')[1] )
  const [data, setDate] = useState<any>({})


  const getDetail = async () => {
    const data = await get('/api/tradeTalent/detail', { account })
    setDate(data)
  }

  useEffect(() => {
    getDetail()
  }, [])

  return (
    <div className="traderdetail-page">
      <Header></Header>
      <div className="content-wrap">
        <div className="goback fs24 df f1 aic" onClick={()=>hanlderJump('traderlist')}><LeftOutlined />交易达人</div>
        <Account data={data}></Account>
        <div className="df mt20 pb24">
          <div className="left-wrap br8">
            <div className="fw bb pdtr1624">收益概览</div>
            <div className="g-df pm bb">
              <ul>
                <li>近7天收益率<p className="c-green">322</p></li>
                <li>累计交易收益<p className="c-green">+50%</p></li>
                <li>最大回撤<p>{Number(Number(data.drawdownRate).toFixed(2)) * 100}%</p></li>
                <li>累计跟单收益额<p className="c-red">{Number(data.totalRevenue).toFixed(2)}</p></li>
              </ul>
            </div>
            <div className="g-list pad24">
              <ul className="lh32">
                <li>累计跟单人数<p>322</p></li>
                <li>近7天胜率<p className="c-green">+50%</p></li>
                <li>总交易次数<p>8723</p></li>
                <li>盈利次数<p>3323</p></li>
                <li>亏损次数<p>3323</p></li>
                <li>平均盈亏<p className="c-green">3323</p></li>
                <li>7天盈亏比<p>3323</p></li>
                <li>平均持仓时间<p>2.77天</p></li>
                <li>交易频次(每周)<p>1.00次</p></li>
                <li>最近交易时间<p>2022-09-92 32：32：32</p></li>
                <li><p className="c999">计价单位：USDT</p></li>
              </ul>
            </div>
          </div>
          <div className="f1 right-wrap br8">
            <div className="fw bb pad24 pb10 pt10 df aic">
              <div className="f1">获利</div>
              <div className="btn line small" onClick={()=> hanlderJump('translog',{id: GetQueryString('id')})}>交易记录</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraderList;
