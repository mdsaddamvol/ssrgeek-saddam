import React from "react";
import { whySsrGeekData } from "../../db";
import styles from "./WhySsrGeek.module.scss";
import Image from "next/image";
const WhySsrGeek = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container__div}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.left__content}>
              {whySsrGeekData.map((item, index) => (
                <div className={styles.card} key={`index-${index}`}>
                  <Image
                    src={item.img}
                    width={40}
                    height={40}
                    alt={item.title}
                  />
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <h4>
              Why <span>SSRGEEK</span> ?
            </h4>
            <h2>Amazing Development Smooth Workflow</h2>
            <p>
              Team of 25 passionate engineers developing with care to make sure
              our clients are 100% happy.
            </p>
            <button>Tell us about your project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySsrGeek;
