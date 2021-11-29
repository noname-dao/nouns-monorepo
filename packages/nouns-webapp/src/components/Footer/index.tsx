import classes from './Footer.module.css';
import { Container } from 'react-bootstrap';
import { externalURL, ExternalURL } from '../../utils/externalURL';
import Link from '../Link';

const Footer = () => {
  const twitterURL = externalURL(ExternalURL.twitter);
  const discordURL = externalURL(ExternalURL.discord);
  const telegramURL = externalURL(ExternalURL.telegram);
  const emailURL = externalURL(ExternalURL.email);

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <footer className={classes.footerSignature}>
          <Link text="discord" url={discordURL} leavesPage={true} />
          <Link text="twitter" url={twitterURL} leavesPage={true} />
          <Link text="telegram" url={telegramURL} leavesPage={true} />
          <Link text="email" url={emailURL} leavesPage={true} />
        </footer>
      </Container>
    </div>
  );
};
export default Footer;
