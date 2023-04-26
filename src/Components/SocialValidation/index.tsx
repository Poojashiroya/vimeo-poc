import Image from "next/image";

import logo from "../../assets/images/user-avatar.png";
import background from "../../assets/images/media-background.jpg";
import companyLogo from "../../assets/images/hp.png";

//css
import styles from "./index.module.css";
import Logo from "../Logo";

/**
 * [SocialValidation]
 * @returns SocialValidation
 */
export default function SocialValidation() {
  return (
    <section className={styles.socialValidationContainer}>
      <div className={styles.socialValidation}>
        <div className={styles.leftSocialValidation}>
          <Logo brandImg={companyLogo} brandUrl="#" color="grey" />
          <div className={styles.leftContentContainer}>
            <p className={styles.desc}>
              “ Social Proof quote consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation.
            </p>
            <div className={styles.user}>
              <Image src={logo} alt="logo" className={styles.logo} />
              <p className={styles.userName}>Jane Doe, Director of Marketing</p>
            </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.roiLeftContainer}>
            <h3 className={styles.socialValidationRoi}>60%</h3>
            <p className={styles.socialRoiDesc}>Interesting Supporting Stat</p>
          </div>
        </div>
        <div className={styles.ImageContainer}>
          <Image src={background} alt="banner" />
        </div>
      </div>
    </section>
  );
}
