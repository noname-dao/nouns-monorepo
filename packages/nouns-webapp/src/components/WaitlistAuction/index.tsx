import { Col } from 'react-bootstrap';
import WaitlistAuctionActivity from '../WaitlistAuctionActivity';
import { Row, Container } from 'react-bootstrap';
import { Auction as IAuction } from '../../wrappers/nounsAuction';
import classes from './Auction.module.css';
import { useAppSelector } from '../../hooks';
import StandaloneNoun from '../WaitlistStandaloneNoun';
import { getNounData, getRandomNounSeed, ImageData } from '@nouns/assets';
import { buildSVG } from '@nouns/sdk';
import React from 'react';

interface AuctionProps {
  auction?: IAuction;
}

const Auction: React.FC<AuctionProps> = props => {
  let stateBgColor = useAppSelector(state => state.application.stateBackgroundColor);
  const generateSvg = () => {
    const seed = getRandomNounSeed();
    const { parts, background } = getNounData(seed);
    console.log(seed);
    const svg = buildSVG(parts, ImageData.palette, background);
    return svg;
  }

  const [nounSvg] = React.useState(generateSvg());

  return (
    <div style={{ backgroundColor: stateBgColor }}>
      <Container fluid="lg">
        <Row className="justify-content-between">
          <Col lg={{ span: 6 }} className={classes.nounContentCol}>
            <div className={classes.nounWrapper}>
              <StandaloneNoun
                imgPath={`data:image/svg+xml;base64,${btoa(nounSvg)}`}
              />
            </div>
          </Col>
          <Col lg={{ span: 5 }} className={classes.auctionActivityCol}>
            <WaitlistAuctionActivity />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Auction;
