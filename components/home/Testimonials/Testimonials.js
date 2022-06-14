import React from "react";
import styles from "./Testimonials.module.scss";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Testimonials = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container__div}>
        <h1 className={styles.title}>
          What Our <span>Clients </span> Say
        </h1>

        <div className={styles.caroselcontainer}>
          <Carousel
            className={styles.carouselMain}
            autoPlay={true}
            showArrows={false}
            showStatus={false}
            infiniteLoop={true}
            showThumbs={false}
          >
            <div className={styles.container}>
              <div className={styles.card__img}>
                <Image
                  width="100%"
                  height="100%"
                  layout="responsive"
                  src="/man.jpg"
                  alt=""
                />
              </div>

              <div className={styles.card__description}>
                <h4>
                  &quot;I would highly recommend working with moontek and their
                  team. Ali and his team work was incredibly thorough,
                  personalized and adaptive. process...&quot;
                </h4>

                <h2>Shane Amborage</h2>
                <h6>Ceo & Founder</h6>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.card__img}>
                <Image
                  width={300}
                  height={300}
                  src="/testimonials/shane.jpg"
                  alt=""
                />
              </div>

              <div className={styles.card__description}>
                <h4>
                  &quot;I would highly recommend working with moontek and their
                  team. Ali and his team work was incredibly thorough,
                  personalized and adaptive. process...&quot;
                </h4>

                <h2>Shane Amborage</h2>
                <h6>Ceo & Founder</h6>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.card__img}>
                <Image
                  width={300}
                  height={300}
                  src="/images/helios.png"
                  alt=""
                />
              </div>

              <div className={styles.card__description}>
                <h4>
                  &quot;I would highly recommend working with moontek and their
                  team. Ali and his team work was incredibly thorough,
                  personalized and adaptive. process...&quot;
                </h4>

                <h2>Shane Amborage</h2>
                <h6>Ceo & Founder</h6>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
