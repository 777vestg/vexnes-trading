import classNames from 'classnames';
import { useRouter } from 'next/router';
import React from 'react';
import content from 'src/static-data/content';
import styles from './styles.module.scss';

const ReviewWorkBlock: React.FC = () => {
  const { locale } = useRouter();

  const {
    companyPage: { reviewWorkBlock },
  } = content[locale as keyof typeof content];
  return (
    <div className={classNames(styles.reviewWorkWrap)}>
      <div className={classNames('container', styles.reviewWork)}>
        <h2 className="fs-48-36">{reviewWorkBlock.title}</h2>
      </div>
    </div>
  );
};

export default ReviewWorkBlock;
