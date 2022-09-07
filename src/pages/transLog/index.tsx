import { FC, useEffect } from "react";
import Header from '../../components/Header'
import Account from '../../components/Account'
import Table from '../../components/Table'
import { LeftOutlined } from '@ant-design/icons';
import { Tabs} from 'antd';
import './index.less'
import { get } from "../../utils/http";


const TraderList: FC = () => {
  const { TabPane } = Tabs;

  const info = async () => {
    const data = await get('/api/subList/info')
  }

  const gotoBack= () =>{
    window.location.href = '/traderlist'
  }

  const onChange = (key: any) => {
    console.log(key);
  };

  useEffect(() => {
    info()
  }, [])

  return (
    <div className="translog-page">
      <Header></Header>
      <div className="content-wrap pb24">
        <div className="goback fs24 df f1 aic" onClick={gotoBack}><LeftOutlined />交易记录</div>
        <div className="br8">
          <Account></Account>
          <div className="pdtr1624">
            <Tabs defaultActiveKey="1" onChange={onChange}>
              <TabPane tab="当前跟单" key="1">
                <Table></Table>
              </TabPane>
              <TabPane tab="历史跟单" key="2">
                <Table></Table>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraderList;
