import { useState } from "react";

import TitleDesc from "@/Components/TitleDescBlock";
import Tag from "@/Components/Tag";

//css
import styles from "./index.module.css";
import SecondaryBtn from "@/Components/Buttons/SecondaryBtn/SecondaryBtn";

/**
 * [FilteredContentBlock]
 * @param
 * @returns FilteredContentBlock
 */
export default function FilteredContentBlock() {
    const tagsData = ["Trim Video", "Crop Video", "Merge Video", "Add Text to Video", "Add Filter to Video", "Add Music to Video", "Add Sticker to Video", "Convert Image to Video"];
    const [activeTags, setActiveTags] = useState([]);

    const handleClick = (val: never) => {
        const check = activeTags && activeTags.includes(val);
        if (check) {
            const copyActiveTags = [...activeTags];
            const resultTags = copyActiveTags.filter((item) => item !== val);
            setActiveTags(resultTags);
        }
        else {
            setActiveTags([...activeTags, val]);
        }
    }

    return (
        <section className={styles.container}>
            <div className={styles.filteredContentContainer}>
                <TitleDesc alignment="left" mediaTitle="Features & Tools" mediaDesc="More Tools and Features with the Vimeo Video Editor" mediaSubDesc="" />
            </div>
            {tagsData && <div className={styles.tagsContainer}>
                {tagsData.map((tag, index) => (
                    <Tag key={tag} title={tag} index={index} activeTags={activeTags} handleClick={handleClick} />
                ))}
            </div>}
            <div className={styles.videoContainer}>
                <video className={styles.video} src="https://player.vimeo.com/external/438451071.sd.mp4?s=2ecc2f64d824738da61dafe1ac911008af55b872&profile_id=164&oauth2_token_id=57447761" autoPlay/>
                <SecondaryBtn href="#" title="Learn More" />
            </div>
        </section>
    )
}