import { FC, useEffect } from "react";
import { Input, Tabs} from 'antd';
import { UserSwitchOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Header from '../../components/Header'
import CardItemLarge from '../../components/CardItemLarge'
import CardItem from '../../components/CardItem'
import "antd/dist/antd.css";
import './index.less'
import { get } from "../../utils/http";


const TraderList: FC = () => {
  const { TabPane } = Tabs;
  const { Search } = Input;

  const onChange = (key: any) => {
    console.log(key);
  };

  const operations = <div className="btn line"><UserSwitchOutlined />我的跟单&nbsp;<ArrowRightOutlined style={{color: '#F7A600' }}/></div>;
  const onSearch = (value: string) => console.log(value);

  const info = async () => {
    const data = await get('/api/subList/info')
  }
  useEffect(() => {
    info()
  }, [])
  return (
    <div className="traderlist-page">
      <Header></Header>
      <div className="banner-wrap">
        <Search placeholder="搜索钱包地址" onSearch={onSearch} style={{ width: 200 }} />
        <div className="title">DEX Trader List<p>TOP TRADER</p></div>
        <div className="bg"></div>
      </div>
      <div className="content-wrap">
        <Tabs defaultActiveKey="1" tabBarExtraContent={operations} onChange={onChange}>
          <TabPane tab="跟单市场" key="1">
            <CardItemLarge
              firstTitle="近7天表现最佳交易员"
              secondTitle="近7日Pnl为正且排名最高，资产快速增值"
            ></CardItemLarge>
            <CardItem
              firstTitle="累积跟单收益最高的交易员"
              secondTitle="跟单者累积跟单总收益数量最多的策略交易员"
            ></CardItem>
            <CardItem
              firstTitle="回撤低的交易员"
              secondTitle="交易策略风险较低，长期增值"
            ></CardItem>
            <CardItem
              firstTitle="短频快不扛单的交易员"
              secondTitle="风险较大，但短期内的收益很可观"
            ></CardItem>
          </TabPane>
          <TabPane tab="我的订阅" key="2">
            {false ? "暂无数据":<CardItem isHasMore={false}
            ></CardItem>}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default TraderList;
