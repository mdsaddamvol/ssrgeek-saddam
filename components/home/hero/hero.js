import styles from "./hero.module.scss";
import Image from "next/image";
const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__div}>
        <div className={styles.hero__main}>
          <div className={styles.hero__main__content}>
            <div className={styles.left}>
              <h1 className={styles.title}>
                Building Innovative Web Applications For Industry Leaders
              </h1>
              <h4 className={styles.subTitle}>
                Web and mobile application development
              </h4>
              <div className={styles.button}>
                <button>Tell us about your project</button>
              </div>
            </div>
            <div className={styles.right}>
              <Image
                src="/images/hero-1.svg"
                height="100%"
                width="100%"
                layout="responsive"
                alt="Hero"
              />
            </div>
          </div>
          {/* <h1 className={styles.title}>Wellcome to SSR GEEK </h1>
      <p className={styles.subTitle}>we build React , Nextjs Applications</p>
      <div className={styles.logos}>
        <img
          className={styles.logo}
          width="80px"
          height="80px"
          src="react.svg"
          alt="react"
        />
        <img
          className={styles.logo}
          width="150px"
          height="120px"
          src="nextjs.svg"
          alt="nextjs"
        />
        <img
          className={styles.logo}
          width="120px"
          height="120px"
          src="node.svg"
          alt="nodejs"
        />
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
