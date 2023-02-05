import classNames from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from 'src/components/button';
import content from 'src/static-data/content';
import styles from './styles.module.scss';

const StudyBlock: React.FC = () => {
  const { locale } = useRouter();
  const {
    mainPage: { studyBlock },
  } = content[locale as keyof typeof content];
  return (
    <div className={classNames(styles.studyMainWrap)}>
      <div className={classNames('container', styles.studyWrap)}>
        <motion.div
          initial={{
            x: '-100%',
          }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className={classNames(styles.study)}>
            <h2
              className="fs-24"
              dangerouslySetInnerHTML={{ __html: studyBlock.title }}
            />
            <span className={classNames(styles.studySubTitle, 'goldText')}>
              {studyBlock.subTitle}
            </span>
            <p className={styles.description}>{studyBlock.description}</p>
            <Button
              target="_blank"
              type="outlined"
              text={studyBlock.buttonText}
              link={studyBlock.buttonLink}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudyBlock;
