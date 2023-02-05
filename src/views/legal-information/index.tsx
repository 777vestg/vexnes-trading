import classNames from 'classnames';
import Head from 'next/head';
import { useRouter } from 'next/router';
import TopBlockWithBgc from 'src/blocks/top-block-with-bgc';
import content from 'src/static-data/content';
import styles from './styles.module.scss';
import React from 'react';

const LegalInformationView: React.FC = () => {
  const { locale } = useRouter();
  const { legalInformation } = content[locale as keyof typeof content];
  const [activeItem, setActiveItem] = React.useState(0);

  return (
    <>
      <Head>
        <title>{legalInformation.pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopBlockWithBgc title={legalInformation.title} />
      <div className={classNames('container', styles.legalInformation)}>
        <ul className={styles.legalInformationList}>
          {legalInformation.legalInformationList.map((item, index) => (
            <li
              onClick={() => setActiveItem(index)}
              key={`${item.title.slice(2)}__${index}`}
              className={classNames('fs-20-16 ', styles.informationTitle, {
                shadow: index == activeItem,
                [styles.activeInformationTitle]: index == activeItem,
              })}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <ul className={styles.legalText}>
          {legalInformation.legalInformationList.map((item, index) => (
            <li
              className={classNames(styles.legalInformationItem, {
                [styles.activeItem]: index == activeItem,
              })}
              key={`${item.title.slice(2)}__${index}`}
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default LegalInformationView;
