import Image from "next/image";

//css
import styles from "./index.module.css";

//props validation
type Props = {
    img: any,
    imgAlt: string,
    cardTitle: string,
    cardDesc: string,
    cardLink: string,
    cardLinkUrl: string,
}

/**
 * [HelpCard]
 * @returns HelpCard
 */
export default function HelpCard({img, imgAlt, cardDesc, cardLink, cardLinkUrl, cardTitle}: Props){
    return (
        <div className={styles.cardContainer}>
         <Image src={img} alt={imgAlt} className={styles.img}/>
         <div className={styles.cardContent}>
           <h4 className={styles.cardTitle} >{cardTitle}</h4>
           <p className={styles.cardDesc}>{cardDesc}</p>
           <a className={styles.cardLink} href={cardLinkUrl}>{cardLink}</a>
         </div>
        </div>
    )
}