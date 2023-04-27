import HelpCard from "../HelpCard";
import bg from "@/assets/images/media-background.jpg";

//css
import styles from "./index.module.css";

/**
 * [Help]
 * @returns Help
 */
export default function Help () {
    return (
        <section className={styles.helpContainer} >
            <h3 className={styles.helpTitle}>Let Us Help You Be A Vimeo Pro</h3>
            <div className={styles.cardsContainer}>
                <HelpCard  cardLinkUrl="#" img={bg} imgAlt="browse-video" cardTitle="Start With a Template" cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." cardLink="Browse Template" />
                <HelpCard  cardLinkUrl="#" img={bg} imgAlt="browse-video" cardTitle="Start With a Template" cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." cardLink="Browse Template" />
                <HelpCard  cardLinkUrl="#" img={bg} imgAlt="browse-video" cardTitle="Start With a Template" cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." cardLink="Browse Template" />
            </div>
        </section>
    )
}
