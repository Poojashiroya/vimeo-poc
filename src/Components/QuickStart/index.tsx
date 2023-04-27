import Image from "next/image";

import Accordion from "../Accordion";
import IconLink from "../IconLink";
import uploadImg from "../../assets/images/upload.png";
import editImg from "../../assets/images/edit.png";
import playImg from "../../assets/images/play.png";
import mobileImg from "../../assets/images/iphone_dark.png";
import recordImg from "../../assets/images/video_record.png";
import appleImg from "../../assets/images/apple.png";
import vimeoWhite from "../../assets/images/vimeo_white.png"
import vimeoBlue from "../../assets/images/vimeo_blue.png";
import vimeoRed from "../../assets/images/vimeo_red.png";

// css
import styles from "./index.module.css";
import { useState } from "react";
import IconText from "../IconText";
import QuickStartAccordionContent from "../QuickStartAccordionContent";

/**
 * [QuickStart]
 * @returns QuickStart
 */
export default function QuickStart () {

    const  [currentAccordion, setCurrentAccordion] = useState(0);

    const handleClick = (index: any) => {
        if(currentAccordion !== index)
        setCurrentAccordion(index);
        if(currentAccordion === index)
        setCurrentAccordion(-1);
    }

    return (
        <div className={styles.quickStartContainer}>
            <h3 className={styles.quickStartTitle}>Quickly Get Started For Free</h3>
            <div className={styles.iconsLinkContainer}>
                <IconLink href="#" img={uploadImg} imgAlt="upload" linkText="Upload a Video" />
                <IconLink href="#" img={editImg} imgAlt="edit" linkText="Edit a Video" />
                <IconLink href="#" img={playImg} imgAlt="play" linkText="Create a Video" />
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.imageContainer}>
                <Image src={mobileImg} alt="mobile" className={styles.image} />
              </div>
              <div className={styles.contents}>
                <div className={styles.recordContent}>
                    <Image src={recordImg} alt="icon" />
                    <p className={styles.recordVideoTitle}>Start Recording & Creating from Anywhere</p>
                </div>
                <div className={styles.accordionsContainer}>
                    <Accordion title={<IconText icon={vimeoRed} iconAlt="vimeo red" text="Vimeo Create" />} handleClick={handleClick} index={0} currentAccordion={currentAccordion} content={<QuickStartAccordionContent />} />
                    <Accordion title={<IconText icon={vimeoWhite} iconAlt="vimeo white" text="Vimeo" />} handleClick={handleClick} index={1} currentAccordion={currentAccordion} content={<QuickStartAccordionContent />} />
                    <Accordion title={<IconText icon={vimeoBlue} iconAlt="vimeo blue" text="Vimeo Extension" />} handleClick={handleClick} index={2} currentAccordion={currentAccordion} content={<QuickStartAccordionContent />} />
                </div>
              </div>
            </div>
        </div>
    )
}