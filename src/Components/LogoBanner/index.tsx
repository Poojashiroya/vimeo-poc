import Logo from "../Logo";
import rolex from "../../assets/images/rolex.png";

// css
import styles from "./index.module.css";

export default function LogoBanner () {
    return (
        <section className={styles.logoBanner}>
            <div className={styles.logoBannerContainer}>
                <Logo brandImg={rolex} brandUrl="#" color="grey" />
                <Logo brandImg={rolex} brandUrl="#" color="grey" />
                <Logo brandImg={rolex} brandUrl="#" color="grey" />
                <Logo brandImg={rolex} brandUrl="#" color="grey" />
                <Logo brandImg={rolex} brandUrl="#" color="grey" />
                <Logo brandImg={rolex} brandUrl="#" color="grey" />
                <Logo brandImg={rolex} brandUrl="#" color="grey" />
                <Logo brandImg={rolex} brandUrl="#" color="grey" />
                <Logo brandImg={rolex} brandUrl="#" color="grey" />
                <Logo brandImg={rolex} brandUrl="#" color="grey" />
                <Logo brandImg={rolex} brandUrl="#" color="grey" />
            </div>
        </section>
    )
}