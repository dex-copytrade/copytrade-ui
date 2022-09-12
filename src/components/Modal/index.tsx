import { Radio, Modal, message } from "antd";
import { FC, useState } from "react";
import type { RadioChangeEvent } from "antd";
import "./index.less";
import { hanlderJump, format } from "../../utils";
import { post } from "../../utils/http";

export interface ItemProps {
  isOpen: boolean;
  info?: any;
  account: string;
  handleCancel: () => void;
}

export const SubModal: FC<ItemProps> = (props) => {
  let { isOpen, info, account, handleCancel = () => void 0 } = props;
  const [owner] = useState(() => localStorage.getItem("owner"));

  const [subInfo, setSubInfo] = useState<any>({
    phoneNumber: "",
    email: "",
  });

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const addSub = async () => {
    const data = await post(' /api/subList/addSub', {account})
    message.success('订阅成功')
    hanlderJump('traderlist',{tab:'sub'})
  };
  const create = async () => {
    const data = await post(' /api/subList/create', { 
      ...subInfo, ...{
        account
      }
     })
     message.success('订阅成功')
    hanlderJump('traderlist',{tab:'sub'})
  };

  const onClick = () => {
    if (info) {
      addSub()
    } else {
      create();
    }
    // hanlderJump('traderlist',{tab:'sub'})
  };

  return (
    <Modal
      title="订阅设置"
      centered
      visible={isOpen}
      onCancel={handleCancel}
      footer={[
        <div className="df">
          <div className="f1 btn line large mr16" onClick={handleCancel}>
            取消
          </div>
          <div className="f1 btn primary large" onClick={onClick}>
            确认
          </div>
        </div>,
      ]}
    >
      {info && (
        <div className="g-list">
          <ul className="lh32">
            <li>
              订阅者<p>{format(account)}</p>
            </li>
            <li>
              订阅地址<p>{format(owner)}</p>
            </li>
            <li>推送渠道</li>
            <li className="sub">
              <em></em>邮箱<p>{info.email}</p>
            </li>
            <li className="sub">
              <em></em>手机号<p>{info.phoneNumber}</p>
            </li>
          </ul>
        </div>
      )}
      {!info && (
        <div className="g-list">
          <ul>
            <li>
              订阅者<p>{format(account)}</p>
            </li>
            <li>
              订阅地址<p>{format(owner)}</p>
            </li>
            <li>邮箱</li>
            <li>
              <input
                placeholder="请输入邮箱地址"
                onChange={(e) => {
                  setSubInfo({ ...subInfo, ...{ email: e.target.value } });
                }}
              ></input>
            </li>
            <li>手机号</li>
            <li>
              <input
                placeholder="请输入手机号"
                onChange={(e) =>
                  setSubInfo({ ...subInfo, ...{ phoneNumber: e.target.value } })
                }
              ></input>
            </li>
            <li>订阅期限</li>
            <li>
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>1个月/5U</Radio>
                <Radio value={2}>3个月/10U</Radio>
                <Radio value={3}>6个月/15U</Radio>
                <Radio value={4}>12个月/20U</Radio>
              </Radio.Group>
            </li>
          </ul>
        </div>
      )}
    </Modal>
  );
};

export default SubModal;
