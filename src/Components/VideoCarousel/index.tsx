import arrow from "@/assets/images/right-arrow.png";
import background from "@/assets/images/media-background.jpg";
import user from "@/assets/images/user-logo.png";

import Image from "next/image";

//css
import styles from "./index.module.css";

/**
 * [VideoCarousel]
 * @returns VideoCarousel
 */
export default function VideoCarousel() {
  return (
    <section>
      <div className={styles.carouselContainer}>
        <div className={styles.slides}>
          <Image alt="fhd" className={styles.video} src={background} />
          <Image alt="jkdcs" className={styles.video} src={background} />
          <Image alt="jkdcs" className={styles.video} src={background} />
        </div>
        <div className={styles.slideContent}>
          <h3 className={styles.title}>
            Adding interactive video drove <strong>800%</strong> more interest
            in Tarform’s products
          </h3>
          <div className={styles.userDesc}>
            <h3 className={styles.title}>
              “If our video evokes an emotion, people will remember the brand,
              and want to be part of it,"
            </h3>
            <div className={styles.profileContainer}>
              <Image src={user} alt="user" className={styles.userImg} />
              <p className={styles.userName}>
                Taras Kravtchouk, Tarform founder
              </p>
            </div>
          </div>
          <a className={styles.viewStory}>
            View Users Story
            <Image src={arrow} alt="arrow" className={styles.logo} />
          </a>
        </div>
      </div>
    </section>
  );
}
