import styles from "./PrimaryBtn.module.css";

//props validation
type Props = {
    title: string,
    href: string,
};

/**
 * [PrimaryBtn]
 * @param {string} title
 * @returns PrimaryBtn
 */
export default function PrimaryBtn({ title, href }: Props) {
    return (
        <a href={href} className={styles.primaryBtn}>{title}</a>
    )
}