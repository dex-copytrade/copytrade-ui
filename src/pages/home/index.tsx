import { FC, useEffect } from "react";
import { Input, Tabs} from 'antd';
import { UserSwitchOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Header from '../../components/Header'
import CardItemLarge from '../../components/CardItemLarge'
import CardItem from '../../components/CardItem'
import "antd/dist/antd.css";
import './index.less'
import { get } from "../../utils/http";

const { TabPane } = Tabs;
const { Search } = Input;

const onChange = (key: any) => {
  console.log(key);
};

const operations = <div className="btn line"><UserSwitchOutlined />我的跟单&nbsp;<ArrowRightOutlined style={{color: '#F7A600' }}/></div>;
const onSearch = (value: string) => console.log(value);

const TraderList: FC = () => {
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
        <div className="title">DEX Trader Index<p>TOP TRADER</p></div>
        <div className="bg"></div>
      </div>
    </div>
  );
};

export default TraderList;
