import cs from "classnames";

//css
import styles from "./index.module.css"

// props validation
type Props = {
    index: number,
    activeTags: Array<number>,
    handleClick: Function,
    title: string,
}

/**
 * [Tag]
 * @param {number} index
 * @param {array<number>} activeTags
 * @param {function} handleClick
 * @param {string} title
 * @returns Tag
 */
export default function Tag ({index, activeTags, handleClick, title}: Props ){
    // check tag selected or not
    const checkActive = () => {
        const checkStatus = activeTags?.includes(index);
        return checkStatus;
    }

    return (
        <button onClick={() => handleClick(index)} className={cs(styles.tag, checkActive() && styles.activeTag)}>{title}</button>
    )
}
