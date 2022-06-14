import styles from "./hero.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className={styles.container}>
      <div className={styles.container__div}>
        <div className={styles.hero__main}>
          <div className={styles.hero__main__content}>
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className={styles.left}
            >
              <h1 className={styles.title}>
                {/* Building Innovative Web Applications For Industry Leaders */}
                We Build Fastest Web Applications For Every Type Of Industies
              </h1>
              <h4 className={styles.subTitle}>
                Web and mobile application development
              </h4>
              <div className={styles.button}>
                <button>Tell us about your project</button>
              </div>
            </motion.div>
            <div>
              <Image
                src="/images/hero-1.svg"
                height="100%"
                width="100%"
                layout="responsive"
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
