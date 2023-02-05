import classNames from 'classnames';
import { useRouter } from 'next/router';
import Button from 'src/components/button';
import content from 'src/static-data/content';
import styles from './styles.module.scss';

const FirstBlock: React.FC = () => {
  const { locale } = useRouter();
  const {
    companyPage: { firstBlock },
  } = content[locale as keyof typeof content];
  return (
    <div className={styles.firstBlockWrap}>
      <div className={classNames('container', styles.firstBlock)}>
        <h1
          className="fs-54"
          dangerouslySetInnerHTML={{ __html: firstBlock.title }}
        />
        <div className={styles.bannerInfo}>
          <div className={styles.bannerCard}>
            <p className="fs-20">{firstBlock.bannerCard.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBlock;
