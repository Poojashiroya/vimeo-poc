import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

import background from "../../../assets/images/media-background.jpg";
import TitleDesc from '@/Components/TitleDescBlock';
import SimpleCard from '@/Components/SimpleCard';

//css
import styles from './index.module.css';

/**
 * [ScrollGifBlock]
 * return ScrollGifBlock
 */
export default function ScrollGifBlock() {
    const cardsData = [
        {
            title: "Add Hotspots",
            desc: "Short description, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            urlTitle: "Learn More",
            urlLink: "#"
        },
        {
            title: "Add Overlays",
            desc: "Short description, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            urlTitle: "Learn More",
            urlLink: "#"
        },
        {
            title: "Add Shoppable CTAs",
            desc: "Short description, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            urlTitle: "Learn More",
            urlLink: "#"
        }
    ];

     const ref = useRef();
  const textRef = useRef();

//   const handleScroll = () => {
//     const scrollLeft = window.scrollY - ref.current.scrollHeight;
//     if (scrollLeft >= 0 && scrollLeft < 500) {
//       console.log(scrollLeft);
//       ref.current.style.transform = "translateX(" + scrollLeft + "px)";
//       textRef.current.style.position = "relative";
//     }
//     if (scrollLeft >= 500) {
//       const scrollTop = window.scrollY - textRef.current.scrollHeight;
//       textRef.current.style.position = "absolute";
//       textRef.current.style.bottom = 3 * scrollTop + "px";
//     }
//   };
//   useEffect(() => {
//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

    return (
        <section>
            <div className={styles.scrollGifContainer}>
                <TitleDesc alignment="left" mediaTitle="Drive engagement & clicks" mediaDesc='Make your customers lean in and take action.' mediaSubDesc='' />
                <section className={styles.cardImgContainer}>
                    {cardsData && <div className={styles.cardsContainer}>
                        {cardsData.map((card) => (
                            <SimpleCard card={card} key={card.title} />
                        ))}
                    </div>
                    }
                    <Image src={background} alt="img" className={styles.imageContainer} />
                </section>
            </div>
        </section>
    )
}