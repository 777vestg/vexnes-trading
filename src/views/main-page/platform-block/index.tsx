import classNames from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import content from 'src/static-data/content';
import styles from './styles.module.scss';

const PlatformBlock: React.FC = () => {
  const { locale } = useRouter();
  const {
    mainPage: { platformBlock },
  } = content[locale as keyof typeof content];
  return (
    <div className={classNames('background-black', styles.platformWrap)}>
      <div className={classNames('container', styles.platform)}>
        <div className={styles.platformImage}>
          <Image
            src={platformBlock.mainImage}
            width={690}
            height={900}
            alt={platformBlock.mainImageAlt}
          />
        </div>

        <motion.div
          initial={{
            x: '100%',
          }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles.platformTextWrap}>
            <h2
              className="fs-36"
              dangerouslySetInnerHTML={{ __html: platformBlock.title }}
            />
            <p className="fs-24">{platformBlock.description}</p>
            <ul className={styles.platformList}>
              {platformBlock.platformList.map((item, index) => (
                <li className="fs-20" key={index}>
                  <Image
                    src={'/images/main-page/platform-block/check.png'}
                    width={25}
                    height={20}
                    alt={'check'}
                    layout="fixed"
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlatformBlock;
