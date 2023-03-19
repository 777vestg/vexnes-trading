import { animate } from 'framer-motion';

type Props = {
  startStateNumber: number;
  endNumber: number;
  duration?: number;
  callBack: (latest: number) => void;
};

const startCounter = ({
  startStateNumber,
  endNumber,
  callBack,
  duration,
}: Props) => {
  return animate(startStateNumber, endNumber, {
    duration: duration ? duration : 1,
    onUpdate: (latest: number) => {
      callBack(latest);
    },
  });
};

export default startCounter;
