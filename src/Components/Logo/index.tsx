import Image from "next/image";
import cs from "classnames";

//css
import styles from "./index.module.css";

//props validataion
type Props = {
  brandUrl: string,
  brandImg: any,
  color: string,
}

/**
 * [Logo]
 * @param {string} brandUrl
 * @param {any} brandImg
 * @param {string} color
 * @returns Logo
 */
export default function Logo ({brandUrl, brandImg, color}: Props) {
    return (
        <a href={brandUrl} className={cs(styles.logoContainer, color === "white" && styles.whiteBg)}>
          <Image src={brandImg} alt="img" className={styles.brandLogo} />
        </a>
    )
}