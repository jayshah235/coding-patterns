import React, { forwardRef } from "react";
import styles from './style.module.scss';

export const Button = forwardRef((props, ref) => {
  const { title, ...rest } = props;
  return (
    <button ref={ref} {...rest} className={styles.button}>
      {title}
    </button>
  );
});
