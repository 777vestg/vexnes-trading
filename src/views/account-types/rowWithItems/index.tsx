import styles from './styles.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

interface Props {
  items?: { title: string; subtitle: string; color?: string }[];
  children?: React.ReactNode;
  className?: string;
}

const RowWithItems: React.FC<Props> = ({ items, children, className }) => {
  return (
    <div className={classNames(className)}>
      {items && (
        <ul className={styles.row}>
          {items.map((item, index) => (
            <li
              className={item.color}
              key={`${item.title.slice(2)}__${index}}`}
            >
              {item.title.includes('/images/') ? (
                <Image
                  src={item.title}
                  width={25}
                  height={20}
                  alt={'check'}
                  layout="fixed"
                />
              ) : (
                <>{item.title && <h2 className="fs-36-24">{item.title}</h2>}</>
              )}
              <p>
                {item.subtitle.includes('/images/') ? (
                  <Image
                    src={item.subtitle}
                    width={25}
                    height={20}
                    alt={'check'}
                    layout="fixed"
                  />
                ) : (
                  <span dangerouslySetInnerHTML={{ __html: item.subtitle }} />
                )}
              </p>
              {children}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RowWithItems;
