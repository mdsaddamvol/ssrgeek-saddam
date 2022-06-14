import React from "react";
import styles from "./ContactUs.module.scss";
import Image from "next/image";
const ContactUs = () => {
  return (
    <div id="contact" className={styles.main}>
      <div className={styles.container__div}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h4>Contact Us</h4>
            <h2>Tell Us About Your Project</h2>
            <Image src="/hi.svg" width={150} height={150} alt="hi" />
          </div>
          <div className={styles.right}>
            <div className={styles.container}>
              <form className={styles.form}>
                <div className={styles.input}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name*"
                  />
                </div>
                <div className={styles.input}>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone Number*"
                  />
                </div>
                <div className={styles.input}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email*"
                  />
                </div>
                <div className={styles.input}>
                  <textarea
                    name="message"
                    id="messag"
                    cols="30"
                    rows="10"
                    placeholder="Describe about your project*"
                  ></textarea>
                </div>

                <button>Send Request</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
