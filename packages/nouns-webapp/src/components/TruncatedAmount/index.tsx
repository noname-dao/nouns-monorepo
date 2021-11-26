import BigNumber from 'bignumber.js';
import { utils } from 'ethers';
import React from 'react';
import maticLogo from '../../assets/matic-logo.svg';

const TruncatedAmount: React.FC<{ amount: BigNumber }> = props => {
  const { amount } = props;

  const eth = new BigNumber(utils.formatEther(amount.toString())).toFixed(2);
  return <>
    <img
      src={maticLogo}
      width="30"
      height="30"
      className="d-inline-block mb-1 me-1 align-middle"
      alt="Matic Logo"
    />
    {`${eth}`}
  </>;
};
export default TruncatedAmount;
