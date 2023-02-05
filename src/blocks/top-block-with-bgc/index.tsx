import classNames from 'classnames';
import styles from './styles.module.scss';

interface Props {
  title: string;
}

const TopBlockWithBgc: React.FC<Props> = ({ title }) => {
  return (
    <div className={classNames('ptb-250', styles.accountTypesPageWrap)}>
      <div className={classNames('container')}>
        <h1 className="fs-48-36">{title}</h1>
      </div>
    </div>
  );
};

export default TopBlockWithBgc;
