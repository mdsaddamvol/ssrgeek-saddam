import React from "react";
import styles from "./RecentProjects.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const RecentProjects = () => {
  return (
    <div id="projects" className={styles.main}>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className={styles.container__div}
      >
        <h1 className={styles.title}>
          Our Recent <span>Projects</span>
        </h1>
        <div className={styles.content}>
          <div className={`${styles.content__card}`}>
            <Image
              src="/projects/morefertile.png"
              width="100"
              height="100%"
              layout="responsive"
              alt=""
            />

            <div className={styles.content__card__hover}>
              <div>
                <h4>A Ecommerce Website</h4>
                <button>View Project</button>
              </div>
            </div>
          </div>
          <div className={`${styles.content__card}`}>
            <Image
              src="/images/helios.png"
              width="100"
              height="100%"
              layout="responsive"
              alt=""
            />

            <div className={styles.content__card__hover}>
              <div>
                <h4>A Ecommerce Website</h4>
                <button>View Project</button>
              </div>
            </div>
          </div>

          {/* <div className={styles.left}>
            <h1>An Ecommerce Website</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
              animi.
            </p>
            <button>View Project</button>
          </div>
          <div className={styles.right}>
            <Image
              src="/images/hero-1.svg"
              width="100%"
              height="100%"
              layout="responsive"
              alt="Project"
            />
          </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default RecentProjects;
