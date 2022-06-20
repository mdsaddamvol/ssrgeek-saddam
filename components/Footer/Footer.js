import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container__div}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <h1>SSRGEEK</h1>
            <p>SsrGeek is a software development agency</p>
          </div>

          <div className={styles.important}>
            <h3>Important Links</h3>
            <ul>
              <li>
                <Link href="#projects">
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href="#services">
                  <a>Services</a>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <a>Contact us</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.follow}>
            <h3>Follow</h3>
            <ul>
              <a
                target="_blank"
                href="https://linkedin.com/"
                rel="noopener noreferrer"
              >
                <li>
                  <Image src="/in.gif" width={30} height={30} alt="" />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>Copyrights © 2022. All rights reserved to ssrgeek.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
