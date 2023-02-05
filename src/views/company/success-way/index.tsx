import classNames from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import content from 'src/static-data/content';
import styles from './styles.module.scss';

const SuccessWay: React.FC = () => {
  const { locale } = useRouter();

  const {
    companyPage: { successWayBlock },
  } = content[locale as keyof typeof content];
  return (
    <div
      className={classNames(
        'background-standard-options ptb-100',
        styles.successWayWrap
      )}
    >
      <div className={classNames('container', styles.successWay)}>
        <motion.div
          initial={{
            x: '-100%',
          }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles.successWayText}>
            <h2 className="goldText fs-54-48">{successWayBlock.title}</h2>
            <p className="fs-24-16">{successWayBlock.description}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{
            x: '100%',
          }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src={'/images/company-page/success-way-block/grafics.png'}
            width={700}
            height={520}
            alt={'grafic'}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessWay;
