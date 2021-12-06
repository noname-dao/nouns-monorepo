import { Modal } from 'react-bootstrap';
import { CHAIN_ID } from '../../config';
import { InjectedConnector } from '@web3-react/injected-connector';


const networkName = () => {
  switch (Number(CHAIN_ID)) {
    case 1:
      return 'Ethereum Mainnet';
    case 4:
      return 'the Rinkeby network';
    case 137:
      return 'Polygon Mainnet';
    default:
      return `Network ${CHAIN_ID}`;
  }
};

const metamaskNetworkName = () => {
  switch (Number(CHAIN_ID)) {
    case 1:
      return 'Ethereum Mainnet';
    case 4:
      return 'Rinkeby Test Network';
    case 137:
      return 'Polygon Mainnet';
    default:
      return `Network ${CHAIN_ID}`;
  }
};

const POLYGON_MAINNET_PARAMS = {
    chainId: '0x89',
    chainName: 'Polygon Mainnet',
    nativeCurrency: {
        name: 'Matic',
        symbol: 'MATIC',
        decimals: 18
    },
    rpcUrls: ['https://polygon-rpc.com'],
    blockExplorerUrls: ['https://polygonscan.com/']
}

const handleAddNetworkClick = () => {
    const injected = new InjectedConnector({
            supportedChainIds: [137],
          });

    injected.getProvider().then(provider => {
      provider
        .request({
          method: 'wallet_addEthereumChain',
          params: [POLYGON_MAINNET_PARAMS]
        })
        .catch((error: any) => {
          console.log(error)
        })
    })

    return false;
}

const NetworkAlert = () => {
  return (
    <>
      <Modal show={true} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Wrong Network Detected</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Noname DAO auctions require you to switch over {networkName()} to be able to participate.
          </p>
          <p>
            <b>To get started, please switch your network by following the instructions below:</b>
          </p>
          <ol>
            <li>Open Metamask</li>
            <li>Click the network select dropdown</li>
            <li><a href="#" onClick={handleAddNetworkClick}>Add "{metamaskNetworkName()}"</a> or select it from the list</li>
          </ol>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default NetworkAlert;
