import { forwardRef } from "react";
import styles from "./style.module.scss";

const Cards = forwardRef((props, ref) => {
  const { brand, description, price, image } = props;
  return (
    <>
      <section ref={ref} className={styles.cardsWrapper}>
        <figure className={styles.image}>
          <img src={image} alt="" />
        </figure>
        <h2>{brand}</h2>
        <p>{description}</p>
        <p>${price}</p>
      </section>
    </>
  );
});

export default Cards;
