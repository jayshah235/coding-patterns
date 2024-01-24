import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Button = forwardRef((props, ref) => {
  const { title, extraClass, ...rest } = props;
  return (
    <button
      ref={ref}
      {...rest}
      className={[styles.button, extraClass]?.join(" ")}
    >
      {title}
    </button>
  );
});
