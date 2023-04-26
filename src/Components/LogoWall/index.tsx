import Logo from "../Logo";
import TitleDesc from "../TitleDescBlock";
import rolex from "../../assets/images/dell.png";

//css
import styles from "./index.module.css";

/**
 * [LogoWall]
 * @returns LogoWall
 */
export default function LogoWall (){
   return (
    <section>
       <div className={styles.logoWallContainer}>
         <TitleDesc alignment="center" mediaTitle="Integrations" mediaDesc="Integrate Seamlessly With Your Workflow" mediaSubDesc="Short descriptionsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." />
         <div className={styles.logosContainer}>
           <Logo brandImg={rolex} brandUrl="#" color="white" />
           <Logo brandImg={rolex} brandUrl="#" color="white" />   
           <Logo brandImg={rolex} brandUrl="#" color="white" />
           <Logo brandImg={rolex} brandUrl="#" color="white" />
           <Logo brandImg={rolex} brandUrl="#" color="white" />
           <Logo brandImg={rolex} brandUrl="#" color="white" />
           <Logo brandImg={rolex} brandUrl="#" color="white" />
           <Logo brandImg={rolex} brandUrl="#" color="white" />
           <Logo brandImg={rolex} brandUrl="#" color="white" />
           <Logo brandImg={rolex} brandUrl="#" color="white" />
           <Logo brandImg={rolex} brandUrl="#" color="white" />
           <Logo brandImg={rolex} brandUrl="#" color="white" />
         </div> 
       </div>
    </section>
   )
}