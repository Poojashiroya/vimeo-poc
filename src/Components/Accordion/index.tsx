import Image from "next/image";

import upArrow from "../../assets/images/up_arrow.png";
import downArrow from "../../assets/images/down_arrow.png";

//css
import styles from "./index.module.css";

//props validation
type Props = {
  title: any;
  content: any;
  handleClick: Function;
  index: number;
  currentAccordion: number;
};

/**
 * [Accordion]
 * @param {any} title
 * @param {any} content
 * @param {number} index
 * @param {function} handleClick
 * @param {number} currentAccordion
 * @returns Accordion
 */
export default function Accordion({
  title,
  content,
  currentAccordion,
  handleClick,
  index,
}: Props) {
  return (
    <div className={styles.accordionWrapper}>
      <button
        onClick={() => handleClick(index)}
        className={styles.title}
      >
          {title}
          <Image
            src={currentAccordion === index ? upArrow : downArrow}
            alt="arrow"
            className={styles.arrowIcon}
          />
      </button>
      {currentAccordion === index && (
        <section className={styles.content}>{content}</section>
      )}
    </div>
  );
}
