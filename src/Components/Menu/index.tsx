

// //css
// import styles from "./index.module.css";


// // props validation
// type Props = {
//     options: any,
//     placeHolder: string
// }

// /**
//  * [Menu]
//  * @returns Menu
//  */
// export default function Menu ({options, placeHolder}: Props) {     
//     return (
//         <NextUIProvider>
//         {/* <div className={styles.menuWrapper}>
//             <select placeholder={placeHolder} className={styles.menu}>
//                 {options && options.map((item: any) => <option value={item.value} key={item.value} className={styles.option}>{item.label}</option>)}
//             </select>
//              <Dropdown arrowClassName={styles.arrow} options={options} placeholder={placeHolder} controlClassName={styles.menu} placeholderClassName={styles.placeHolder} menuClassName={styles.option} />
//             </div> */}
//             <Dropdown>
//             <Dropdown.Button light className={styles.dropDownWrapper} placeholder="Month">Month</Dropdown.Button>
//       <Dropdown.Menu aria-label="Static Actions">
//         <Dropdown.Item key="new">New file</Dropdown.Item>
//         <Dropdown.Item key="copy">Copy link</Dropdown.Item>
//         <Dropdown.Item key="edit">Edit file</Dropdown.Item>
//         <Dropdown.Item key="delete" color="error">
//           Delete file
//         </Dropdown.Item>
//       </Dropdown.Menu>
//             </Dropdown>
//             </NextUIProvider>
//     )
// }