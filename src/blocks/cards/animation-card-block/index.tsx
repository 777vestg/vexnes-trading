import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import content from 'src/static-data/content';
import styles from './styles.module.scss';

interface Props {
  title?: string;
  list: {
    title: string;
    description: string;
    image: string;
  }[];
}

const AnimationCardBlock: React.FC<Props> = ({ title, list }) => {
  return (
    <div className={classNames('container', styles.animationCardBlockWrap)}>
      {title && (
        <h2 className="fs-36" dangerouslySetInnerHTML={{ __html: title }} />
      )}

      <ul className={styles.animationCardBlockList}>
        {list.map((item, index) => (
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

export default AnimationCardBlock;
