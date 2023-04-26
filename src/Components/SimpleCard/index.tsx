import Link from "../Link";

//css
import styles from "./index.module.css";

// props validation
type Props = {
    card: {
        title: string,
        desc: string,
        urlLink: string,
        urlTitle: string,
    }
}

/**
 * [SimpleCard]
 * @param {object} card
 * @returns SimpleCard
 */
export default function SimpleCard({ card }: Props) {
    return (
        <div className={styles.card} key={card.title}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.desc}</p>
            <Link href={card.urlLink} title={card.urlTitle} />
        </div>
    )
}