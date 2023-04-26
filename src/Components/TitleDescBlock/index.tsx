import cs from "classnames";

import styles from "./index.module.css";

//props validation
type Props = {
    alignment: string,
    mediaTitle: string,
    mediaDesc: string,
    mediaSubDesc: string
}

/**
 * [TitleDesc]
 * @returns TitleDesc
 */
export default function TitleDesc ({alignment, mediaTitle, mediaDesc, mediaSubDesc}: Props) {
    return (
        <div className={cs(styles.mediaContent, alignment === "down" && styles.downAlignMediaContent ,alignment === "left" && styles.leftAlignMediaContent, alignment === "right" && styles.rightAlignMediaContent)}>
          <h3 className={styles.mediaTitle}>{mediaTitle}</h3>
          <h2 className={cs(styles.mediaDescription, alignment === "left" && styles.leftAlignMediaDescription, alignment === "right" && styles.rightAlignMediaDescription)}>{mediaDesc}</h2>
          {mediaSubDesc && <p className={styles.mediaSubDesc}>{mediaSubDesc}</p>}
        </div>
    );
}
