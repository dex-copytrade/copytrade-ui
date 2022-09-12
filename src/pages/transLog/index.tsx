import { FC, useEffect, useState } from "react";
import Header from '../../components/Header'
import Account from '../../components/Account'
import Table from '../../components/Table'
import { LeftOutlined } from '@ant-design/icons';
import { Tabs} from 'antd';
import './index.less'
import { get } from "../../utils/http";
import { useLocation } from "react-router-dom";
import { hanlderJump } from "../../utils";

const columns = [
  {
    title: "币种",
    dataIndex: "base",
  },
  {
    title: "入场价格",
    dataIndex: "avgEntryPrice",
  },
  {
    title: "标地价格",
    dataIndex: "indexPrice",
  },
  {
    title: "合约数量",
    dataIndex: "basePosition",
  },
  {
    title: "方向",
    dataIndex: "side",
  },
  // {
  //   title: "未结盈亏",
  //   dataIndex: "address",
  // },
  // {
  //   title: "操作",
  //   dataIndex: "address",
  // },
];

const columns1 = [
  {
    title: "ID",
    dataIndex: "takerOrderId",
  },
  {
    title: "入场价格",
    dataIndex: "price",
  },
  {
    title: "数量",
    dataIndex: "quantity",
  },
  {
    title: "时间",
    dataIndex: "loadTimestamp",
  },
  {
    title: "方向",
    dataIndex: "takerSide",
  },
  // {
  //   title: "未结盈亏",
  //   dataIndex: "address",
  // },
  // {
  //   title: "操作",
  //   dataIndex: "address",
  // },
];


const TraderList: FC = () => {
  const { TabPane } = Tabs;

  const location = useLocation()

  const [account] = useState<any>(() => location.search.split('=')[1] )
  const [data, setDate] = useState<any>({})
  const [position, setPosition] = useState<any>([])
  const [history, setHistory] = useState<any>([])


  const getDetail = async () => {
    const data = await get('/api/tradeTalent/detail', { account })
    setDate(data)
  }

  const getPosition = async () => {
    const data = await get('/api/position/list')
    setPosition(data.perpPositions)
  }

  const getHistory = async () => {
    const data = await get('/api/tradeHistory/list')
    setHistory(data)
  }
  
  const onChange = (key: any) => {
    console.log(key);
  };

  useEffect(() => {
    getDetail()
    getPosition()
    getHistory()
  }, [])

  return (
    <div className="translog-page">
      <Header></Header>
      <div className="content-wrap pb24">
        <div className="goback fs24 df f1 aic" onClick={()=>hanlderJump('traderlist')}><LeftOutlined />交易记录</div>
        <div className="br8">
          <Account data={data}></Account>
          <div className="pdtr1624">
            <Tabs defaultActiveKey="1" onChange={onChange}>
              <TabPane tab="当前仓位" key="1">
                <Table columns={columns} data={position} key="1-1"></Table>
              </TabPane>
              <TabPane tab="历史跟单" key="2">
                <Table columns={columns1} data={history}  key="2-2"></Table>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraderList;
