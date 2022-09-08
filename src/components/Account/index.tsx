import { FC, useState } from "react";
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="br8 asset-wrap pad24">
        <div className="df">
          <div className="f1 df aic">
            <div className="fw fs18 mr16">{format(data.account)}</div>
            <div className="c999">
              累计收益总排行&nbsp;<span className="fw c-black">No.03</span>
            </div>
          </div>
          <div className="btn line2 mr16" onClick={() => setIsModalOpen(true)}>
            订阅
          </div>
          <div className="btn primary">跟单</div>
        </div>
        <div className="g-df df list">
          <div>
            总资产<p>1503,433,546,5455 USDT</p>
          </div>
          <div>
            当前持仓价值<p>433,546,5455 USDT</p>
          </div>
          <div>
            当前跟单人数<p>{data.copyCount}</p>
          </div>
        </div>
      </div>
      <SubModal
        isOpen={isModalOpen}
        account="CQ3232432...323"
        handleCancel={handleCancel}
      ></SubModal>
    </>
  );
};

export default CardItem;
