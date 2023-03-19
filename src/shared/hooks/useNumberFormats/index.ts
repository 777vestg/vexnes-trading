import { useMemo } from 'react';

interface Props {
  number: number;
}

const UseNumberFormats = ({ number }: Props) => {
  const normalNumberFormat = useMemo(() => {
    return new Intl.NumberFormat('ru-RU').format(number);
  }, [number]);

  return normalNumberFormat;
};

export default UseNumberFormats;
