import { motion } from 'framer-motion';
import React from 'react';
import startCounter from 'src/utils/counter/counter';
import styles from './styles.module.scss';

interface Props {
  item: {
    title: string;
    percent: string;
  };
  myIndex: number;
}

const PercentItem: React.FC<Props> = ({ myIndex, item }) => {
  const [currentNumber, setCurrentNumber] = React.useState(0);
  const duration = 1;

  return (
    <li
      className={styles.percentItem}
      key={`${item.title.slice(2)}__${myIndex}`}
    >
      <motion.div
        viewport={{ once: true }}
        onViewportEnter={() =>
          startCounter({
            startStateNumber: currentNumber,
            endNumber: Number(item.percent),
            callBack: (number: number) => setCurrentNumber(Math.round(number)),
            duration,
          })
        }
      >
        <div
          className={styles.percent}
          style={{
            background: `linear-gradient(to right, #fff1cd ${currentNumber}%, transparent 0)`,
          }}
        >
          <span>
            {item.title} {currentNumber}%
          </span>
        </div>
      </motion.div>
    </li>
  );
};

export default PercentItem;
