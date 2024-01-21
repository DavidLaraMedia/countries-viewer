import { forwardRef, ReactNode, HTMLAttributes } from 'react';

import styles from './Section.module.scss';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  backgroundColor?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  function Section({ children, className, backgroundColor, ...rest }, ref) {
    let sectionClassName = styles.section;

    if (className) {
      sectionClassName = `${sectionClassName} ${className}`;
    }

    return (
      <section
        ref={ref}
        className={sectionClassName}
        data-background-color={backgroundColor}
        {...rest}
      >
        {children}
      </section>
    );
  }
);

export default Section;
