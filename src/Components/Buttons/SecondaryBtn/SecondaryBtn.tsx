import styles from "./SecondaryBtn.module.css";

//props validation
type Props = {
    title: string,
    href: string
};

/**
 * [SecondaryBtn]
 * @param {string} title
 * @returns SecondaryBtn
 */
export default function SecondaryBtn({ title, href }: Props) {
    return (
        <a href={href} className={styles.secondaryBtn}>{title}</a>
    )
}