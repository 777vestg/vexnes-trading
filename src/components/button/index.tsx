import classNames from 'classnames';
import Link from 'next/link';
import { HTMLAttributeAnchorTarget } from 'react';
import styles from './styles.module.scss';

interface Props {
  link?: string;
  text: string;
  className?: string;
  onClick?: () => void;
  type?: 'outlined' | 'text';
  target?: HTMLAttributeAnchorTarget;
}

const Button: React.FC<Props> = ({
  link,
  text,
  className,
  onClick = () => null,
  type = 'text',
  target = '',
}) => {
  return (
    <>
      {link ? (
        <Link href={link}>
          <a
            onClick={onClick}
            target={target}
            className={classNames(className, styles.button, {
              [styles.outlinedBUtton]: type == 'outlined',
              [styles.textButton]: type == 'text',
            })}
          >
            {text}
          </a>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={classNames(className, styles.button, {
            [styles.outlinedBUtton]: type == 'outlined',
            [styles.textButton]: type == 'text',
          })}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
