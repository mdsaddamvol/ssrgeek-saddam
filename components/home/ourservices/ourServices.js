import styles from "./ourServices.module.scss";
import { motion } from "framer-motion";

const OurServices = () => {
  return (
    <div id="services" className={styles.container__div}>
      <div className={styles.main}>
        <h1 className={styles.title}>
          Our <span>Services</span>
        </h1>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 2, delayChildren: 0.5 }}
          className={styles.content}
        >
          <div className={styles.content__card}>
            <h3>Rest API</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
              provident?
            </p>
          </div>
          <div className={styles.content__card}>
            <h3>PWA</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
              provident?
            </p>
          </div>
          <div className={styles.content__card}>
            <h3>Performance Optimization</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
              provident?
            </p>
          </div>
          <div className={styles.content__card}>
            <h3>React Application</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
              provident?
            </p>
          </div>
          <div className={styles.content__card}>
            <div>
              <h3>Next Js Application</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
                provident?
              </p>
            </div>
          </div>
          <div className={styles.content__card}>
            <h3>Next + Headless Wordpress</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
              provident?
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;
