import { FC, useEffect, useState } from "react";
import { Input, Tabs, message } from "antd";
import { UserSwitchOutlined, ArrowRightOutlined } from "@ant-design/icons";
import Header from "../../components/Header";
import CardItemLarge from "../../components/CardItemLarge";
import CardItem from "../../components/CardItem";
import "antd/dist/antd.css";
import "./index.less";
import { get, post } from "../../utils/http";
import { GetQueryString } from "../../utils";

const TraderList: FC = () => {
  const { TabPane } = Tabs;
  const { Search } = Input;
  const [list7D, setList7D] = useState<any>([]);
  const [list30D, setList30D] = useState<any>([]);
  const [subListData, setSubList] = useState<any>([]);
  const [drawdownRate, setDrawdownRate] = useState<any>([]);
  const [tab, setTab] = useState<string>("1");

  const onSearch = (value: string) => console.log(value);
  const onChange = (key: string) => {
    setTab(key);
  };

  

  const subList = async () => {
    const data = await get("/api/subList/list");
    setSubList(data)
    // return data.list;
  };

  const unSubList = async (account: any) => {
    const data = await post(" /api/subList/cancelSub", { account });
    message.success('取消订阅成功')
    subList()
  }

  const info = async (interval: number, sortKey: string) => {
    const data = await post("/api/tradeTalent/list", { sortKey, interval });
    return data.list;
  };
  useEffect(() => {

    if(GetQueryString("tab")){
      onChange("2")
      subList()
    }
    info(15, "profitSettlements").then((data) =>
    setList7D([data[0] || {}, data[1] || {}, data[2] || {}])
  );

  info(30, "profitSettlements").then((data) => {
    setList30D(data);
    let l = data.sort((a: any, b: any) => a.drawdownRate + b.drawdownRate);
    setDrawdownRate(l);
  });
    
  }, []);
  return (
    <div className="traderlist-page">
      <Header></Header>
      <div className="banner-wrap">
        <Search
          placeholder="Search Wallet Address"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
        <div className="title">
          DEX Trader List<p>TOP TRADER</p>
        </div>
        <div className="bg"></div>
      </div>
      <div className="content-wrap">
        <Tabs
          activeKey={tab}
          tabBarExtraContent={
            <div className="btn line">
              <UserSwitchOutlined />
              我的跟单&nbsp;
              <ArrowRightOutlined style={{ color: "#F7A600" }} />
            </div>
          }
          onChange={onChange}
        >
          <TabPane tab="SingleMarket" key="1">
            <CardItemLarge
              firstTitle="近7天表现最佳交易员"
              secondTitle="近7日Pnl为正且排名最高，资产快速增值"
              list={list7D}
            ></CardItemLarge>
            <CardItem
              firstTitle="累积跟单收益最高的交易员"
              secondTitle="跟单者累积跟单总收益数量最多的策略交易员"
              list={list30D}
            ></CardItem>
            <CardItem
              firstTitle="回撤低的交易员"
              secondTitle="交易策略风险较低，长期增值"
              list={drawdownRate}
            ></CardItem>
            {/* <CardItem
              firstTitle="短频快不扛单的交易员"
              secondTitle="风险较大，但短期内的收益很可观"
            ></CardItem> */}
          </TabPane>
          <TabPane tab="MySubscription" key="2">
            {subListData.length == 0 ? "暂无数据" : <CardItem list={subListData} unSubList={unSubList} isHasMore={false}></CardItem>}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default TraderList;
