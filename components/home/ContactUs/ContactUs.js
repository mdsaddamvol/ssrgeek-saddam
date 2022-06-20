import React, { useState } from "react";
import styles from "./ContactUs.module.scss";
import Image from "next/image";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !email) {
      return alert("Name or email can not be Empty.");
    }
    if (!text || !phone) {
      return alert("Message or Phone no can not be Empty.");
    }

    const res = await fetch("/api/contactEmailHandler", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        text: text,
        phone: phone,
      }),
    });
    const data = await res.json();

    if (data.succes) {
      setLoading(false);
      alert(
        "Good Job! Your Message has been send Successfully. Our team will be contact you soon!"
      );
      setName("");
      setEmail("");
      setText("");
      setPhone("");
    } else {
      setLoading(false);
      alert("Failed to send email. Please try again.");
    }
  };
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
              <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.input}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name*"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className={styles.input}>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone Number*"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
                <div className={styles.input}>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email*"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className={styles.input}>
                  <textarea
                    name="message"
                    id="messag"
                    cols="30"
                    rows="10"
                    placeholder="Describe about your project*"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  ></textarea>
                </div>

                <button type="submit">
                  {loading ? "Loading..." : "Send Request"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
