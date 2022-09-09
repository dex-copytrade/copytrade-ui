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
    title: "仓位",
    dataIndex: "name",
  },
  {
    title: "入场价格",
    dataIndex: "age",
  },
  {
    title: "合约数量",
    dataIndex: "address",
  },
  {
    title: "开仓时间",
    dataIndex: "address",
  },
  {
    title: "未结盈亏",
    dataIndex: "address",
  },
  {
    title: "操作",
    dataIndex: "address",
  },
];
const datas = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];


const TraderList: FC = () => {
  const { TabPane } = Tabs;

  const location = useLocation()

  const [account] = useState<any>(() => location.search.split('=')[1] )
  const [data, setDate] = useState<any>({})


  const getDetail = async () => {
    const data = await get('/api/tradeTalent/detail', { account })
    setDate(data)
  }

  const getPosition = async () => {
    const data = await get('/api/position/list')
    // setDate(data)
  }

  const getHistory = async () => {
    const data = await get('/api/tradeHistory/list')
    // setDate(data)
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
              <TabPane tab="当前跟单" key="1">
                <Table columns={columns} data={datas} key="1"></Table>
              </TabPane>
              <TabPane tab="历史跟单" key="2">
                <Table columns={columns} data={datas}  key="2"></Table>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraderList;
