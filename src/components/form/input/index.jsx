import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef((props, ref) => {
  const { label, errorMessage, showErrors, parentStyle, ...rest } = props;
  return (
    <div className={styles.inputContainer} style={parentStyle}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} ref={ref} {...rest} />
      {showErrors && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
});
