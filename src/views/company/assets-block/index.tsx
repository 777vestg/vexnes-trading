import classNames from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Button from 'src/components/button';
import content from 'src/static-data/content';
import PercentItem from './percent-item';
import styles from './styles.module.scss';

const AssetsBlock: React.FC = () => {
  const { locale } = useRouter();

  const {
    companyPage: { assetsBlock },
  } = content[locale as keyof typeof content];
  return (
    <div className={classNames(styles.assetsWrap, 'ptb-100')}>
      <div className={classNames('container', styles.assets)}>
        <div className={styles.assetsInner}>
          <ul className={styles.percentList}>
            {assetsBlock.percentList.map((item, index) => (
              <PercentItem item={item} key={index} myIndex={index} />
            ))}
          </ul>
          <motion.div
            initial={{
              x: '100%',
            }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className={classNames(styles.assetsDescription)}>
              <h2 className="fs-36">{assetsBlock.title}</h2>
              <p>{assetsBlock.description}</p>
            </div>
          </motion.div>
        </div>

        <Button
          type="outlined"
          className="mw-190 m-center "
          link={assetsBlock.buttonLink}
          text={assetsBlock.buttonText}
          target={assetsBlock.buttonsTarget}
        />
      </div>
    </div>
  );
};

export default AssetsBlock;
