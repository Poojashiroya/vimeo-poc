import cs from "classnames";

import styles from "./Card.module.css";

//props validation
type Props = {
    card: {
        title: string,
        description: string,
        urlLink: string,
        urlTitle: string,
        mediaUrl: string
    },
    handleCardClick: Function,
    currentActiveCard: number,
    index: number,
    alignment: string,
}

/**
 * [Card] - title, description, link
 * @param {array} card - card details
 * @param {Function} handleCardClick
 * @param {number} currentActiveCard
 * @param {number} index - card index
 * @param {string} alignment - card alignment 
 * @returns Card
 */
export default function Card({ card, handleCardClick, currentActiveCard, index, alignment }: Props) {
    return (
        <div onClick={() => handleCardClick(index)} className={cs(styles.card, currentActiveCard === index && styles.activeCard, alignment === "left" && styles.leftAlignCard, alignment === "left" && currentActiveCard === index && styles.leftAlignActiveCard,  alignment === "right" && styles.rightAlignCard, alignment === "right" && currentActiveCard === index && styles.rightAlignActiveCard)}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
            <a href={card.urlLink} className={styles.cardLink}>{card.urlTitle}</a>
        </div>
    );
}