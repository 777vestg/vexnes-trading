import classNames from 'classnames';
import Head from 'next/head';
import { useRouter } from 'next/router';
import CardsBlock from 'src/blocks/cards/cards-block';
import TopBlockWithBgc from 'src/blocks/top-block-with-bgc';
import Button from 'src/components/button';
import content from 'src/static-data/content';
import styles from './styles.module.scss';

const EducationView: React.FC = () => {
  const { locale } = useRouter();
  const { educationPage } = content[locale as keyof typeof content];
  return (
    <>
      <Head>
        <title>{educationPage.pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopBlockWithBgc title={educationPage.title} />
      <div
        className={classNames(
          'container background-standard-options',
          styles.education
        )}
      >
        <CardsBlock list={educationPage.educationVideoList} />
      </div>
    </>
  );
};

export default EducationView;
