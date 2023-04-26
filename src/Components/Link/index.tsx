// css
import styles from "./index.module.css";

// props validation
type Props = {
    href: string,
    title: string,
}

/**
 * [Link]
 * @param {string} title
 * @param {string} href
 * @returns Link 
 */
export default function Link ({href, title}: Props){
    return (
        <a href={href} className={styles.link}>{title}</a>
    )
}