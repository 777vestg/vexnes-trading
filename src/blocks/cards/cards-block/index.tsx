import classNames from 'classnames';
import { HTMLAttributeAnchorTarget } from 'react';
import Button from 'src/components/button';
import styles from './styles.module.scss';

interface Props {
  list: {
    title: string;
    description?: string;
    innerList?: string[];
    buttonText: string;
    buttonLink?: string;
    buttonsTarget?: HTMLAttributeAnchorTarget;
  }[];
}

const CardsBlock: React.FC<Props> = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list.map((item, index) => (
        <li
          className={classNames('shadow', styles.listItem)}
          key={`${item.title.slice(2)}___${index}`}
        >
          <h4 className="fs-24">{item.title}</h4>
          {item.description && <p>{item.description}</p>}
          {item.innerList && (
            <ul className={styles.innerList}>
              {item.innerList.map((innerItem, index) => (
                <li
                  className={classNames(styles.listInnerItem)}
                  key={`${innerItem.slice(2)}___${index}`}
                >
                  {innerItem}
                </li>
              ))}
            </ul>
          )}
          <Button
            target={item.buttonsTarget}
            link={item.buttonLink}
            text={item.buttonText}
          />
        </li>
      ))}
    </ul>
  );
};

export default CardsBlock;
