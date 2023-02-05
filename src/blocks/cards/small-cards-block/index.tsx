import classNames from 'classnames';
import Button from 'src/components/button';
import Card from './card';
import styles from './styles.module.scss';

interface Props {
  title?: string;
  description?: string;
  list: {
    title: string;
    symbol?: string;
    description?: string;
  }[];
}

const smallCardsBlock: React.FC<Props> = ({ list, title, description }) => {
  return (
    <div className={classNames('container', styles.smallCardsBlockWrap)}>
      {title && <h2 className="fs-36 boldText">{title}</h2>}
      {description && (
        <span className={classNames('fs-24', styles.description)}>
          {description}
        </span>
      )}
      <ul className={styles.list}>
        {list.map((item, index) => (
          <Card
            key={index}
            myKey={index}
            title={item.title}
            symbol={item.symbol}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default smallCardsBlock;
