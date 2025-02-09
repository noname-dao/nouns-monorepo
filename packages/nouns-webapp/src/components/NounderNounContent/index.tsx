import { Col, Row } from 'react-bootstrap';
import { BigNumber } from 'ethers';
import AuctionActivityWrapper from '../AuctionActivityWrapper';
import AuctionNavigation from '../AuctionNavigation';
import AuctionActivityNounTitle from '../AuctionActivityNounTitle';
import AuctionActivityDateHeadline from '../AuctionActivityDateHeadline';
import AuctionTitleAndNavWrapper from '../AuctionTitleAndNavWrapper';
import { Link } from 'react-router-dom';
import nounContentClasses from './NounderNounContent.module.css';
import auctionBidClasses from '../AuctionActivity/BidHistory.module.css';
import bidBtnClasses from '../BidHistoryBtn//BidHistoryBtn.module.css';
import auctionActivityClasses from '../AuctionActivity/AuctionActivity.module.css';
import CurrentBid, { BID_N_A } from '../CurrentBid';
import { buildEtherscanAddressLink } from '../../utils/etherscan';

const NounderNounContent: React.FC<{
  mintTimestamp: BigNumber;
  nounId: BigNumber;
  isFirstAuction: boolean;
  isLastAuction: boolean;
  onPrevAuctionClick: () => void;
  onNextAuctionClick: () => void;
}> = props => {
  const {
    mintTimestamp,
    nounId,
    isFirstAuction,
    isLastAuction,
    onPrevAuctionClick,
    onNextAuctionClick,
  } = props;

  return (
    <AuctionActivityWrapper>
      <div className={auctionActivityClasses.informationRow}>
        <Row className={auctionActivityClasses.activityRow}>
          <Col lg={12}>
            <AuctionActivityDateHeadline startTime={mintTimestamp} />
          </Col>
          <AuctionTitleAndNavWrapper>
            <AuctionActivityNounTitle nounId={nounId} />
            <AuctionNavigation
              isFirstAuction={isFirstAuction}
              isLastAuction={isLastAuction}
              onNextAuctionClick={onNextAuctionClick}
              onPrevAuctionClick={onPrevAuctionClick}
            />
          </AuctionTitleAndNavWrapper>
        </Row>
        <Row className={auctionActivityClasses.activityRow}>
          <Col lg={5} className={auctionActivityClasses.currentBidCol}>
            <CurrentBid currentBid={BID_N_A} auctionEnded={true} />
          </Col>
          <Col
            lg={5}
            className={`${auctionActivityClasses.currentBidCol} ${nounContentClasses.currentBidCol}`}
          >
            <div className={auctionActivityClasses.section}>
              <h4>Winner</h4>
              <h3><a href={buildEtherscanAddressLink('0x762DC6d785714e08a754aC972D51338f8d57d886')} target="_blank">Founders Vault</a></h3>
            </div>
          </Col>
        </Row>
      </div>
      <Row className={auctionActivityClasses.activityRow}>
        <Col lg={12}>
          <ul className={auctionBidClasses.bidCollection}>
            <li className={`${auctionBidClasses.bidRow} ${nounContentClasses.bidRow}`}>
              All Noname auction proceeds are sent to the{' '}
              <Link to="/vote" className={nounContentClasses.link}>
                Noname DAO
              </Link>
              . For this reason, we, the project's founders have chosen to compensate
              ourselves with Nonames. Every 10th Noname for the first 5 years of the project will be
              sent to our multisig (3/5), where it will be vested and distributed to individual
              Founders.
            </li>
          </ul>
          {/*<div className={bidBtnClasses.bidHistoryWrapper}>
            <Link to="/nounders" className={bidBtnClasses.bidHistory}>
              Learn More →
            </Link>
          </div> */}
        </Col>
      </Row>
    </AuctionActivityWrapper>
  );
};
export default NounderNounContent;
