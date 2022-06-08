import React from "react";
import styles from "./Testimonials.module.scss";
const Testimonials = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container__div}>
        <h1 className={styles.title}>
          What Our <span>Clients </span> Say
        </h1>
        <div className={styles.content}>
          <div className={`${styles.content__card}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
