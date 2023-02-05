import classNames from 'classnames';
import Head from 'next/head';
import { useRouter } from 'next/router';
import CardsBlock from 'src/blocks/cards/cards-block';
import TopBlockWithBgc from 'src/blocks/top-block-with-bgc';
import Button from 'src/components/button';
import content from 'src/static-data/content';
import styles from './styles.module.scss';

const AnalyticsView: React.FC = () => {
  const { locale } = useRouter();
  const { analyticsPage } = content[locale as keyof typeof content];
  return (
    <>
      <Head>
        <title>{analyticsPage.pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopBlockWithBgc title={analyticsPage.title} />
      <div
        className={classNames(
          'container background-standard-options',
          styles.education
        )}
      >
        <CardsBlock list={analyticsPage.analyticsFirstList} />
        <CardsBlock list={analyticsPage.analyticsSecondList} />
        <CardsBlock list={analyticsPage.analyticsThirdList} />
      </div>
    </>
  );
};

export default AnalyticsView;
