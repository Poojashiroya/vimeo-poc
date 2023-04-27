import Image from "next/image";

//css
import styles from "./index.module.css";

// props validation
type Props = {
  href: string,
  img: any,
  imgAlt: string,
  linkText: string,
}

/**
 * [IconLink]
 * @param {string} href
 * @param {any} img
 * @param {string} imgAlt
 * @param {string} linkText
 * @returns IconLink
 */
export default function IconLink ({href, img, imgAlt, linkText}: Props) {
    return (
        <a href={href} className={styles.linkContainer}>
            <Image src={img} alt={imgAlt} className={styles.linkImg} />
            <p className={styles.linkText}>{linkText}</p>
        </a>
    )
}