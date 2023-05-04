import Menu from "../Menu";

//css
import styles from "./index.module.css";

/**
 * [Filters]
 * @returns Filters
 */
export default function Filters () {
    const options = [
        {
            value: 'january',
            label: 'January'
    },{ 
        value: 'february',
        label: 'february'
    },{
         value:'march',
         label: 'march'
    },
    {
        value: 'april',
        label: 'april'
    },
    {
        value: <input type="checkbox" />,
        label: 'may'
    }
      ];
    return (
        <section className={styles.filtersContainer}>
            <Menu options={options} placeHolder="Month"/>
        </section>
    )
}