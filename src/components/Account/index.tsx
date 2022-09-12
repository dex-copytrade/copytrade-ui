import { Modal } from "antd";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { get } from "../../utils/http";
import SubModal from "../Modal";
import "./index.less";

const format = (str: string) => {
  if (str) {
    return `${str.slice(0, 5)}....${str.slice(str.length - 5, str.length)}`;
  } else {
    return "";
  }
};

export interface propsMode {
  data?: any;
}

import "./index.less";

export const CardItem: FC<propsMode> = (props) => {
  const { data } = props;

  const [subType, setSubType] = useState(false)

  const [info, setInfo] = useState(null)
  const location = useLocation()

  const [account] = useState<any>(() => location.search.split('=')[1] )

  const getDetail = async () => {
    const data = await get(' /api/subList/info')
    if(data){
      setInfo(data)
      if(data.subAccount.includes(account)){
        setSubType(true)
      }
    }
  }

  useEffect(() => {
    getDetail()
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  function btnConnectClick() {
    if(localStorage.getItem('owner')){
      setIsModalOpen(true)
    }else {
      if (!window.solana) {
        Modal.info({
          title: '请先安装 phantom 钱包',
          okText: '去安装',
          onOk() {
            window.open('https://phantom.app/')
          },
        });
      }else {
        Modal.info({
          title: '请先连接 phantom 钱包',
          okText: '去连接',
          onOk() {
            window.solana.connect().then((resp: any) => {
              const publicKey = resp.publicKey.toString();
              localStorage.setItem('owner', publicKey);
            });
          },
        });
      }
    }
    
  }
  return (
    <>
      <div className="br8 asset-wrap pad24">
        <div className="df">
          <div className="f1 df aic">
            <div className="fw fs18 mr16">{format(data.account)}</div>
            {/* <div className="c999">
              累计收益总排行&nbsp;<span className="fw c-black">No.03</span>
            </div> */}
          </div>
          <div className="btn line2 mr16" onClick={btnConnectClick}>
            {subType ? '已订阅' : '订阅'}
          </div>
          <div className="btn primary">跟单-开发中</div>
        </div>
        <div className="g-df df list">
          <div>
            总资产<p>{data.amount}5 USDT</p>
          </div>
          <div>
            当前持仓价值<p>{data.positionAmount || '--'} USDT</p>
          </div>
          <div>
            当前跟单人数<p>{data.copyCount}</p>
          </div>
        </div>
      </div>
      <SubModal
        isOpen={isModalOpen}
        info={info}
        account={data.account}
        handleCancel={handleCancel}
      ></SubModal>
    </>
  );
};

export default CardItem;
