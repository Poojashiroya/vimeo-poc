import Image from "next/image";

import appleLogo from "../../assets/images/apple.png";

// css
import styles from "./index.module.css";

/**
 * [QuickStartAccordionContent]
 * @returns QuickStartAccordionContent
 */
export default function QuickStartAccordionContent () {
    return (
        <div className={styles.accordionContentContainer}>
            <p className={styles.accordionContentDesc}>Create and customize videos for any occasion with our A.I powered video maker.</p>
            <div className={styles.linksContainer}>
                <a className={styles.link} href="#">
                    <Image src={appleLogo} alt="logo" className={styles.logo} />
                     <div className={styles.logoDetails}>
                        <p className={styles.logoDesc}>Download on the</p>
                        <h3 className={styles.logoTitle}>App Store</h3>
                     </div>
                </a>
                <a className={styles.link} href="#">
                    <Image src={appleLogo} alt="logo" className={styles.logo} />
                     <div className={styles.logoDetails}>
                        <p className={styles.logoDesc}>Download on the</p>
                        <h3 className={styles.logoTitle}>App Store</h3>
                     </div>
                </a>
            </div>
        </div>
    );
}