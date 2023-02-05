import React from 'react';
import styles from './styles.module.scss';
import CircularProgress from '@mui/material/CircularProgress';

function InWorkView() {
  return (
    <div className={styles.inWorkWrap}>
      <div className={styles.inWork}>
        <CircularProgress size={80} className={styles.loading} />
      </div>
    </div>
  );
}

export default InWorkView;
