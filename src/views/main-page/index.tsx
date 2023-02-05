import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import content from 'src/static-data/content';
import AssetsBlock from './assets-block';
import DifferenceBlock from './difference-block';
import FirstBlock from './first-block';
import PlatformBlock from './platform-block';
import StudyBlock from './study-block';
import TrustBlock from './trust-block';

const MainPageView: React.FC = () => {
  const { locale } = useRouter();
  const { mainPage } = content[locale as keyof typeof content];
  const animationWrap = (children: ReactNode) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    );
  };
  return (
    <div className="mainContainer">
      <Head>
        <title>{mainPage.pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FirstBlock />
      {animationWrap(<AssetsBlock />)}
      {animationWrap(<StudyBlock />)}
      {animationWrap(<DifferenceBlock />)}
      {animationWrap(<PlatformBlock />)}
      {animationWrap(<TrustBlock />)}
    </div>
  );
};

export default MainPageView;
