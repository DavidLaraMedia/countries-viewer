import { ReactNode, HTMLAttributes } from 'react';
import styles from './Container.module.scss';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const Container = ({ children, className, ...rest }: ContainerProps): JSX.Element => {
  let containerClassName = styles.container;

  if (className) {
    containerClassName = `${containerClassName} ${className}`;
  }

  return (
    <div className={containerClassName} {...rest}>
      {children}
    </div>
  );
};

export default Container;
