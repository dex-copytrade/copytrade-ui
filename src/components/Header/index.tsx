import { FC } from "react";
import './index.less'

const HeaderComponents: FC = () => {
  return (
    <div className='header-warp df aic'>
      <div className="f1  fs18 fw"><p className="logo">DEX Copy Trading</p></div>
      <div className="btn primary">Connect Wallet</div>
    </div>
  )
};

export default HeaderComponents;
