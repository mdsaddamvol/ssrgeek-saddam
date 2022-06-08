import React from "react";
import { technologiesData } from "../../db";
import styles from "./TechnologiesUsed.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
const TechnologiesUsed = () => {
  return (
    <div className={styles.container__div}>
      <div className={styles.main}>
        <h1 className={styles.title}>
          <span>Technologies</span> We Use
        </h1>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, delayChildren: 0.5 }}
          className={styles.content}
        >
          {technologiesData.map((technology, index) => (
            <div key={`index-${index}`} className={styles.content__card}>
              <div>
                <Image
                  src={technology.img}
                  width={60}
                  height={60}
                  alt={technology.title}
                />
              </div>
              <h5>{technology.title}</h5>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologiesUsed;
