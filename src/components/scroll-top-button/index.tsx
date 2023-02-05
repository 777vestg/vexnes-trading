import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkHeight = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener('scroll', checkHeight);

    return () => {
      window.removeEventListener('scroll', checkHeight);
    };
  }, []);
  return (
    <>
      {showButton && (
        <button
          className={styles.button}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
        />
      )}
    </>
  );
};

export default ScrollTopButton;
