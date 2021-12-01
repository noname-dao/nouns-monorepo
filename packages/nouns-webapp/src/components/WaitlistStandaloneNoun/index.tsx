import Noun from '../Noun';
import { Link } from 'react-router-dom';
import classes from './StandaloneNoun.module.css';

interface StandaloneNounProps {
  imgPath: string;
}

const StandaloneNoun: React.FC<StandaloneNounProps> = (props: StandaloneNounProps) => {
  const { imgPath } = props;

  return (
    <Link to={'/'} className={classes.clickableNoun}>
      <Noun imgPath={imgPath} alt="Noname #1" />
    </Link>
  );
};

export default StandaloneNoun;
