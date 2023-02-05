import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import content from 'src/static-data/content';
import styles from './styles.module.scss';

const DifferenceBlock: React.FC = () => {
  const { locale } = useRouter();
  const {
    mainPage: { differenceBlock },
  } = content[locale as keyof typeof content];
  return (
    <div className={classNames('container', styles.differenceWrap)}>
      <h2
        className="fs-36"
        dangerouslySetInnerHTML={{ __html: differenceBlock.title }}
      />
      <ul className={styles.differenceList}>
        {differenceBlock.differenceList.map((item, index) => (
          <li key={index}>
            <Image src={item.image} width={80} height={80} alt={item.title} />
            <span className="fs-24-16">{item.title}</span>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DifferenceBlock;
