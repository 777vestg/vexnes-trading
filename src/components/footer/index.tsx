import Link from 'next/link';
import { useRouter } from 'next/router';
import content from 'src/static-data/content';
import styles from './styles.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

const Footer: React.FC = () => {
  const { locale } = useRouter();
  const {
    footer: { leftBlock, rightBlock, payPartners },
  } = content[locale as keyof typeof content];
  return (
    <footer className="background-black">
      <div className={classNames('container', styles.footer)}>
        <div className={styles.footerBlocks}>
          <div className={styles.leftBlock}>
            <span className={styles.leftBlockTitle}>{leftBlock.title}</span>
            <ul className={styles.leftBlockList}>
              {leftBlock.leftBlockList.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <span className={styles.leftBlockSubTitle}>
              {leftBlock.subtitle}
            </span>
          </div>
          <div className={styles.rightBlock}>
            <span className={styles.rightBlockTitle}>{rightBlock.title}</span>
            <ul className={styles.rightBlockList}>
              {rightBlock.rightBlockList.map((item, index) => (
                <li key={index}>
                  <Image
                    src={item.image}
                    width={23}
                    height={23}
                    alt={item.alt}
                  />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.infoBlock}>
          <Image
            src={leftBlock.descriptionImage}
            width={645}
            height={110}
            alt={leftBlock.descriptionImageAlt}
          />
          <div className={styles.rightBlockSubTitle}>
            {rightBlock.description.map((item, index) => (
              <p className="fs-10" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
        <Image
          src={'/images/footer/payments-footer.png'}
          width={1094}
          height={80}
          alt={'payments'}
        />
      </div>
    </footer>
  );
};

export default Footer;
