import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import classes from './AuctionTimer.module.css';
import { useState, useEffect, useRef } from 'react';

dayjs.extend(duration);

const AuctionTimer: React.FC<{
  auctionEnded: boolean;
  startTime: number;
}> = props => {
  const { startTime, auctionEnded } = props;

  const [auctionTimer, setAuctionTimer] = useState(0);
  const auctionTimerRef = useRef(auctionTimer); // to access within setTimeout
  auctionTimerRef.current = auctionTimer;

  const timerDuration = dayjs.duration(auctionTimerRef.current, 's');

  // timer logic
  useEffect(() => {
    const timeLeft = startTime - dayjs().unix();

    setAuctionTimer(timeLeft);

    if (timeLeft <= 0) {
      setAuctionTimer(0);
    } else {
      const timer = setTimeout(() => {
        setAuctionTimer(auctionTimerRef.current - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [auctionTimer]);

  const auctionContent = auctionEnded ? "Let's go!" : 'Launch in';

  const flooredMinutes = Math.floor(timerDuration.minutes());
  const flooredSeconds = Math.floor(timerDuration.seconds());

  return (
    <>
      <h4 className={classes.title}>{auctionContent}</h4>
      <h2 className={classes.timerWrapper}>
      <div className={classes.timerSection}>
          <span>
            {`${Math.floor(timerDuration.days())}`}
            <span className={classes.small}>d</span>
          </span>
        </div>
        <div className={classes.timerSection}>
          <span>
            {`${Math.floor(timerDuration.hours())}`}
            <span className={classes.small}>h</span>
          </span>
        </div>
        <div className={classes.timerSection}>
          <span>
            {`${flooredMinutes}`}
            <span className={classes.small}>m</span>
          </span>
        </div>
        <div className={classes.timerSection}>
          <span>
            {`${flooredSeconds}`}
            <span className={classes.small}>s</span>
          </span>
        </div>
      </h2>
    </>
  );
};

export default AuctionTimer;
