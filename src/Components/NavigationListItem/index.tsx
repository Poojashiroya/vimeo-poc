import Image from "next/image";

//css
import styles from "./index.module.css";

// props validation
type Props = {
    listData: any,
}

/**
 * [NavigationListItem]
 * @returns NavigationListItem
 */
export default function NavigationListItem ({listData}: Props) {
    return (
    <li>
      <a className={styles.navigationListItem} href={listData.url}>
        <Image src={listData.img} alt={listData.imgAlt} className={styles.navigationListItemImg} />
        <div className={styles.listItemContent}>
            <h4 className={styles.listItemTitle}>{listData.title}</h4>
            <p className={styles.listItemDesc}>{listData.desc}</p>
        </div>
       </a>      
    </li>
    );
}