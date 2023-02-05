import styledEngineSc from '@mui/styled-engine-sc';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import SmallCardsBlock from 'src/blocks/cards/small-cards-block';
import Button from 'src/components/button';
import content from 'src/static-data/content';
import styles from './styles.module.scss';

const TrustBlock: React.FC = () => {
  const { locale } = useRouter();
  const {
    mainPage: { trustBlock },
  } = content[locale as keyof typeof content];
  return (
    <div className={styles.trustBlockWrap}>
      <div className={classNames('container', styles.trustBlock)}>
        <SmallCardsBlock
          list={trustBlock.trustList}
          title={trustBlock.title}
          description={trustBlock.description}
        />
        <div className={styles.clientRulesWrap}>
          <div className={styles.clientAllowList}>
            <span>{trustBlock.clientAllowTitle}</span>
            <ul>
              {trustBlock.clientAllowList.map((item, index) => (
                <li key={index}>
                  {index + 1}. {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.clientNotAllowTList}>
            <span>{trustBlock.clientNotAllowTitle}</span>
            <ul>
              {trustBlock.clientNotAllowTList.map((item, index) => (
                <li key={index}>
                  {index + 1}. {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Button
          link={trustBlock.buttonLink}
          target={'_blank'}
          type="outlined"
          text={trustBlock.buttonText}
          className={styles.trustButton}
        />
      </div>
    </div>
  );
};

export default TrustBlock;
