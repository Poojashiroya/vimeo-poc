import Image from "next/image";

//css
import styles from "./index.module.css";

// props validation
type Props = {
    icon: any,
    text: string,
    iconAlt: string
}

/**
 * [IconText]
 * @param {any} icon
 * @param {string} iconAlt
 * @param {string} text
 * @returns IconText
 */
export default function IconText ({icon, iconAlt, text}: Props) {
    return (
        <div className={styles.iconTextContainer}>
            <Image src={icon} alt={iconAlt} className={styles.icon} />
            <p className={styles.text}>{text}</p>
        </div>
    );
}