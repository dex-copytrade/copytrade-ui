import { Radio, Modal } from 'antd';
import { FC, useState } from "react";
import type { RadioChangeEvent } from 'antd';
import './index.less'
import { hanlderJump } from '../../utils';

export interface ItemProps {
  isOpen: boolean
  isFisrtSub?: boolean
  account: string
  handleCancel: () => void
}

export const SubModal:FC<ItemProps> = (props) => {
  let { isOpen, isFisrtSub, account, handleCancel=() => void 0} = props

  const [value, setValue] = useState(1);
  
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
      <Modal
        title="订阅设置"
        centered
        visible={isOpen}
        onCancel={handleCancel}
        footer={[
          <div className='df'>
            <div className="f1 btn line large mr16" onClick={handleCancel}>取消</div>
            <div className="f1 btn primary large" onClick={()=>hanlderJump('traderlist',{tab:'sub'})}>确认</div>
          </div>
        ]}
      >
        {!isFisrtSub && <div className="g-list">
          <ul className="lh32">
            <li>订阅者<p>{account}</p></li>
            <li>订阅地址<p>{account}</p></li>
            <li>推送渠道</li>
            <li className='sub'><em></em>邮箱<p>crazy@gmail.com</p></li>
            <li className='sub'><em></em>手机号<p>13878987652</p></li>
          </ul>
        </div>}
        {isFisrtSub &&
          <div className="g-list">
          <ul>
            <li>订阅者<p>{account}</p></li>
            <li>邮箱</li>
            <li><input placeholder='请输入邮箱地址'></input></li>
            <li>手机号</li>
            <li><input placeholder='请输入手机号'></input></li>
            <li>订阅期限</li>
            <li><Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>1个月/5U</Radio>
              <Radio value={2}>3个月/10U</Radio>
              <Radio value={3}>6个月/15U</Radio>
              <Radio value={4}>12个月/20U</Radio>
            </Radio.Group></li>
          </ul>
        </div>
        }
      </Modal>
  );
};

export default SubModal;