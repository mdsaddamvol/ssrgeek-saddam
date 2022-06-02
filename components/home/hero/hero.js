import styles from "./hero.module.scss";
const Hero = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Wellcome to SSR GEEK </h1>
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
      </div>
    </div>
  );
};

export default Hero;
