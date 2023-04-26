import Image from "next/image";

import logo from "../../assets/images/user-avatar.png";

// css
import styles from "./index.module.css";

/**
 * [LargeStat]
 * @returns LargeStat
 */
export default function LargeStat() {
  return (
    <section className={styles.largeStat}>
      <div className={styles.largeStatContainer}>
        <div className={styles.roiContainer}>
          <div className={styles.roi}>
            <h2>60</h2>
            <p>%</p>
          </div>
          <h3 className={styles.roiDesc}>
            Increased ROI from using Vimeo Video Marketing
          </h3>
          <div className={styles.companyLogo}>
            <Image src="" alt="company-logo" />
          </div>
        </div>
        <div className={styles.rightContentContainer}>
          <p className={styles.desc}>
            “ Social Proof quote consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation.
          </p>
          <div className={styles.user}>
            <Image src={logo} alt="logo" />
            <p className={styles.userName}>Jane Doe, Director of Marketing</p>
          </div>
        </div>
      </div>
    </section>
  );
}
