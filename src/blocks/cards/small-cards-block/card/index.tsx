import { motion } from 'framer-motion';
import React from 'react';
import UseNumberFormats from 'src/shared/hooks/useNumberFormats';
import startCounter from 'src/shared/utils/counter/counter';

interface Props {
  myKey: number;
  title: string;
  symbol?: string;
  description?: string;
}

const Card: React.FC<Props> = ({ myKey, title, symbol, description }) => {
  const [currentNumber, setCurrentNumber] = React.useState(0);
  const duration = 1;
  return (
    <li key={myKey}>
      <motion.div
        viewport={{ once: true }}
        onViewportEnter={() =>
          startCounter({
            startStateNumber: currentNumber,
            endNumber: Number(title),
            callBack: (number: number) => setCurrentNumber(Math.round(number)),
            duration,
          })
        }
      />
      <h3 className="fs-36">
        {UseNumberFormats({ number: currentNumber })}
        {symbol}
      </h3>
      <p>{description}</p>
    </li>
  );
};

export default Card;
