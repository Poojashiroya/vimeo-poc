import NavigationListItem from "../NavigationListItem";

//css
import styles from "./index.module.css";

// props validation
type Props = {
    list: any
}

/**
 * [NavigationList]
 * @param {array} list - list data
 * @returns NavigationList
 */
export default function NavigationList({list}: Props){
    return (
        <div className={styles.listContainer}>
                    <h3 className={styles.navigationListTitle}>{list.title}</h3>
                    <ul className={styles.navigationListContainer}>
                        {list.listItems && list.listItems.map((item:any) => (
                        <NavigationListItem listData={item} key={item.title}/>
                        ))}
                    </ul>
                </div>
    )
}