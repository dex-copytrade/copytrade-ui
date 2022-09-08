import { FC, useEffect, useState } from 'react';
import './index.less';
import { Header, Payload, SIWS } from '@web3auth/sign-in-with-solana';
import { formatPublicKey } from '../../utils';

const HeaderComponents: FC = () => {
  const [publicKey, setPublicKey] = useState('');
  const statement = 'Sign in with Solana to the app.';

  useEffect(() => {
    const owner = localStorage.getItem('owner');
    if (owner) {
      setPublicKey(owner);
    }
  }, []);

  // Connect the solana wallet Tested with Phantom
  function btnConnectClick() {
    try {
      if (window.solana) {
        window.solana.connect().then((resp: any) => {
          const publicKey = resp.publicKey.toString();
          setPublicKey(publicKey);
          localStorage.setItem('owner', publicKey);
          signIn();
        });
      } else {
        alert('请先安装 phantom 钱包');
      }
    } catch (error) {
      console.log('User rejected the request.' + error);
    }
  }

  async function signIn() {
    const message = createSolanaMessage(publicKey, statement);

    const encodedMessage = new TextEncoder().encode(message);
    const signedMessage = await window.solana.request({
      method: 'signMessage',
      params: {
        message: encodedMessage,
        display: 'text',
      },
    });
    // console.log(signedMessage);
  }

  function createSolanaMessage(address: string, statement: string) {
    const header = new Header();
    header.t = 'sip99';

    const payload = new Payload();
    payload.domain = location.hostname;
    payload.address = address;
    payload.uri = location.origin;
    payload.statement = statement;
    payload.version = '1';
    payload.chainId = 1;

    const message = new SIWS({
      header,
      payload,
    });
    return message.prepareMessage();
  }

  return (
    <div className='header-warp df aic'>
      <div className='f1  fs18 fw'>
        <p className='logo'>Bitverse DEX Copytrading</p>
      </div>
      {publicKey ? (
        <div style={{ color: 'white' }}>{formatPublicKey(publicKey)}</div>
      ) : (
        <div className='btn primary' onClick={btnConnectClick}>
          Connect Wallet
        </div>
      )}
    </div>
  );
};

export default HeaderComponents;
