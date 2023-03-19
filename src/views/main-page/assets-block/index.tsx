import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import content from 'src/static-data/content';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import startCounter from 'src/shared/utils/counter/counter';
import UseNumberFormats from 'src/shared/hooks/useNumberFormats';

const AssetsBlock: React.FC = () => {
  const { locale } = useRouter();
  const {
    mainPage: { assetsBlock },
  } = content[locale as keyof typeof content];
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [currentNumber, setCurrentNumber] = React.useState(0);
  const duration = 1;

  return (
    <div className={classNames(styles.assetsWrap)}>
      <div className={classNames('container')}>
        <motion.div
          className={classNames(styles.assets, 'fs-54')}
          viewport={{ once: true }}
          onViewportEnter={() =>
            startCounter({
              startStateNumber: currentNumber,
              endNumber: Number(assetsBlock.assetsNumber),
              callBack: (number: number) =>
                setCurrentNumber(Math.round(number)),
              duration,
            })
          }
        >
          <span className={styles.assetsNumber}>
            {UseNumberFormats({ number: currentNumber })}+
          </span>
          <span className={styles.assetsText}>{assetsBlock.assetsText}</span>
        </motion.div>

        <p className={classNames('fs-24', styles.assetsDescription)}>
          {assetsBlock.assetsDescription}
        </p>
        <ul className={styles.topListSlider}>
          {assetsBlock.assetsSlider.map((item, index) => (
            <li
              onClick={() => setCurrentSlide(index)}
              className={currentSlide == index ? styles.activeTopItem : ''}
              key={index}
            >
              <div>
                <Image
                  src={item.smallImage}
                  alt={item.title}
                  width={200}
                  height={200}
                />
              </div>

              <span>{item.title}</span>
            </li>
          ))}
        </ul>
        <ul className={styles.slides}>
          {/* Hidden slide */}
          <li className={styles.hiddenSlide}>
            <div>
              <Image
                src={assetsBlock.assetsSlider[0].mainImage}
                alt={assetsBlock.assetsSlider[0].title}
                width={611}
                height={408}
              />
            </div>

            <div className={styles.sliderTextWrap}>
              <span className="fs-24">
                {assetsBlock.assetsSlider[0].subtitle}
              </span>
              <p className="fs-20">{assetsBlock.assetsSlider[0].description}</p>
            </div>
          </li>
          {/* Hidden slide */}
          {assetsBlock.assetsSlider.map((item, index) => (
            <li
              className={currentSlide == index ? styles.activeSlide : ''}
              key={index}
            >
              <div>
                <Image
                  src={item.mainImage}
                  alt={item.title}
                  width={611}
                  height={408}
                />
              </div>

              <div className={styles.sliderTextWrap}>
                <span className="fs-24">{item.subtitle}</span>
                <p className="fs-20">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AssetsBlock;
