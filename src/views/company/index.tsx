import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import AnimationCardBlock from 'src/blocks/cards/animation-card-block';
import SmallCardsBlock from 'src/blocks/cards/small-cards-block';
import Button from 'src/components/button';
import content from 'src/static-data/content';
import AssetsBlock from './assets-block';
import FirstBlock from './first-block';
import ReviewWorkBlock from './review-work-block';
import SuccessWay from './success-way';

const CompanyPageView: React.FC = () => {
  const { locale } = useRouter();
  const { companyPage } = content[locale as keyof typeof content];
  const { trustBlock, chooseBlock } = companyPage;

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
        <title>{companyPage.pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FirstBlock />
      {animationWrap(<AssetsBlock />)}
      {animationWrap(<SuccessWay />)}
      {animationWrap(
        <AnimationCardBlock
          list={chooseBlock.chooseBlockList}
          title={chooseBlock.title}
        />
      )}
      {animationWrap(<ReviewWorkBlock />)}
      {animationWrap(
        <SmallCardsBlock
          list={trustBlock.trustList}
          title={trustBlock.title}
          description={trustBlock.description}
        />
      )}
      <Button
        type="outlined"
        className="mw-190 m-center-top-50"
        text={trustBlock.buttonText}
        link={trustBlock.buttonLink}
        target={trustBlock.buttonsTarget}
      />
    </div>
  );
};

export default CompanyPageView;
