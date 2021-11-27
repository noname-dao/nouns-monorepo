import BigNumber from 'bignumber.js';
import { utils } from 'ethers';
import React from 'react';
import { CURRENCY_LOGO, CURRENCY_SYMBOL } from '../../config';

const TruncatedAmount: React.FC<{ amount: BigNumber }> = props => {
  const { amount } = props;

  const eth = new BigNumber(utils.formatEther(amount.toString())).toFixed(2);
  return <>
    <img
      src={CURRENCY_LOGO}
      style={{width: "1em", height: "1em", maxWidth: "30px", maxHeight: "30px"}}
      className="d-inline-block mb-1 me-1 align-middle"
      alt={`${CURRENCY_SYMBOL} logo`}
    />
    {`${eth}`}
  </>;
};
export default TruncatedAmount;
