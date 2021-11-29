import classes from './Banner.module.css';
import Section from '../../layout/Section';
import { Col } from 'react-bootstrap';
import landing_noun from '../../assets/landing-noun.svg';
import Noun from '../Noun';

const Banner = () => {
  return (
    <Section fullWidth={false} className={classes.bannerSection}>
      <Col lg={6}>
        <div className={classes.wrapper}>
          <h1>
            One noname,
            <br />
            every day,
            <br />
            forever.
          </h1>
        </div>
      </Col>
      <Col lg={6}>
        <div style={{ padding: '2rem' }}>
          <Noun imgPath={landing_noun} alt="noname" />
        </div>
      </Col>
    </Section>
  );
};

export default Banner;
