import HelpCard from "../HelpCard";
import TitleDesc from "../TitleDescBlock"
import SecondaryBtn from "../Buttons/SecondaryBtn/SecondaryBtn.tsx"
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
                <HelpCard  cardLinkUrl="#" img={bg} imgAlt="browse-video" cardTitle="See Vimeo In Action" cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." cardLink="Watch Demo Videos" />
                <HelpCard  cardLinkUrl="#" img={bg} imgAlt="browse-video" cardTitle="Visit Resource Hub" cardDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod." cardLink="Go to Resource Hub" />
            </div>
            <div className={styles.helpDescriptionContainer}>
                <TitleDesc alignment="left" mediaTitle="" mediaDesc="Hire An Vimeo Video Pro" mediaSubDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                <SecondaryBtn title="Get Started With a Pro" href="#" />
            </div>
        </section>
    )
}
