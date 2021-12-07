import { Col, Image } from 'react-bootstrap';
import Section from '../../layout/Section';
import classes from './NotFound.module.css';
import logo from '../../assets/logo.svg';

const NotFoundPage = () => {
  return (
    <Section fullWidth={false}>
      <Col lg={4}>
        <Image src={logo} fluid />
      </Col>
      <Col lg={8}>
        <h1 className={classes.heading}>
          404: Dao that can be named is not the eternal Dao itself
        </h1>
      </Col>
    </Section>
  );
};
export default NotFoundPage;
