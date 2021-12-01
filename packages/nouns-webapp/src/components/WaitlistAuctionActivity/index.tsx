import { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import classes from './AuctionActivity.module.css';
import AuctionTimer from '../WaitlistAuctionTimer';
import AuctionActivityWrapper from '../AuctionActivityWrapper';
import AuctionTitleAndNavWrapper from '../AuctionTitleAndNavWrapper';
import { ExternalURL, externalURL } from '../../utils/externalURL';

const AuctionActivity: React.FC = () => {
  const [auctionEnded, setAuctionEnded] = useState(false);
  const [auctionTimer, setAuctionTimer] = useState(false);

  const startDate = new Date(Date.UTC(2021, 11, 8, 14, 0));

  useEffect(() => {
    const timeLeft = startDate.getTime() - Math.floor(Date.now() / 1000);

    if (timeLeft <= 0) {
      setAuctionEnded(true);
    } else {
      setAuctionEnded(false);
      const timer = setTimeout(
        () => {
          setAuctionTimer(!auctionTimer);
        },
        30000,
      );

      return () => {
        clearTimeout(timer);
      };
    }
  }, [auctionTimer]);

  return (
    <>
      <AuctionActivityWrapper>
        <div className={classes.informationRow}>
          <Row className={classes.activityRow}>
            <Col lg={12}>
              <h4>{startDate.toLocaleString("en-US", { year: undefined, month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}</h4>
            </Col>
            <AuctionTitleAndNavWrapper>
              <h1>Noname #1</h1>
            </AuctionTitleAndNavWrapper>
          </Row>
          <AuctionTimer startTime={startDate.getTime() / 1000} auctionEnded={auctionEnded} />
        </div>
        <Row className={classes.activityRow}>
          <Col lg={12}>
            <Button
              href={externalURL(ExternalURL.discord)}
              target="_blank"
              size="lg"
              style={{ backgroundColor: "#3EAEF4", border: "none", fontWeight: "bold"}}
            >
              Join waitlist in Discord
            </Button>
          </Col>
        </Row>
      </AuctionActivityWrapper>
    </>
  );
};

export default AuctionActivity;
