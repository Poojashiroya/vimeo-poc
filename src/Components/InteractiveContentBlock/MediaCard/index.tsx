import React, { useState } from 'react';
import cs from "classnames";

import PrimaryBtn from '../../Buttons/PrimaryBtn/PrimaryBtn';
import SecondaryBtn from '../../Buttons/SecondaryBtn/SecondaryBtn';
import Card from '../../Card/Card';
import TitleDesc from '../../TitleDescBlock';

//css
import styles from './index.module.css';

//props validation
type props = {
  alignment: string,
  mediaTitle: string,
  mediaDesc: string,
  mediaSubDesc: string,
  cardsData: {
    title: string,
    description: string,
    urlLink: string,
    urlTitle: string,
    mediaUrl: string
  }[],
  btn1Url: string,
  btn1Title: string,
  btn2Url: string,
  btn2Title: string
};

/**
 * [MediaCard] - contains scrollable description card and media
 * @param {string} alignment
 * @param {string} mediaTitle
 * @param {string} mediaDescription
 * @param {string} mediaSubDesc
 * @param {Array} cardsData
 * @param {string} btn1Url
 * @param {string} btn1Title
 * @param {string} btn2Url
 * @param {string} btn2Title
 * @returns MediaCard
 */
export default function MediaCard({ alignment, mediaTitle, mediaDesc, mediaSubDesc, cardsData, btn1Url, btn1Title, btn2Url, btn2Title }: props) {

  const [currentActiveCard, setActiveCard] = useState(0);
  const [mediaBg, setMediaBg] = useState(cardsData[0].mediaUrl);

  const handleCardClick = (index: any) => {
    setActiveCard(index);
    setMediaBg(cardsData[index].mediaUrl);
  }

  const mediaBackground = {
    backgroundImage: `url(${mediaBg})`
  };

  return (
    <section>
      <div className={cs(styles.mediaCardContainer, alignment === "left" && styles.leftAlignMediaCardContainer, alignment === "right" && styles.rightAlignMediaCardContainer)}>
        <div className={cs(styles.mediaContainer, alignment === "left" && styles.leftAlignCardMedia, alignment === "right" && styles.rightAlignCardMedia)} style={mediaBackground} />
        <TitleDesc alignment={alignment} mediaTitle={mediaTitle} mediaDesc={mediaDesc} mediaSubDesc={mediaSubDesc} />
        {cardsData && <div className={cs(styles.mediaCardsWrapper, alignment === "left" && styles.leftAlignMediaCardsWrapper, alignment === "right" && styles.rightAlignMediaCardsWrapper)}>
          {
            cardsData && cardsData.map((card, index) => (
              <Card alignment={alignment} card={card} handleCardClick={handleCardClick} currentActiveCard={currentActiveCard} index={index} key={card.title} />
            ))
          }
        </div>}
        {(btn1Title || btn2Title) && <div className={cs(styles.btnsWrapper, alignment === "left" && styles.leftAlignBtnsWrapper, alignment === "right" && styles.rightAlignBtnsWrapper)}>
          {btn1Title && <PrimaryBtn href="#" title={btn1Title} />}
          {btn2Title && <SecondaryBtn href="#" title={btn2Title} />}
        </div>}
      </div>
    </section>
  );
}

MediaCard.defaultProps = {
  align: 'center',
  mediaTitle: 'Drive engagement & clicks',
  mediaDesc: 'Make your customers lean in action.',
  mediaSubDesc: '',
  cardsData: [
    {
      title: "Add Hotspots",
      description: "Short description",
      urlLink: "#",
      urlTitle: "Learn More",
      mediaUrl: "https://thumbs.gfycat.com/MetallicRemarkableLice.webp",
    }
  ],
  btn1Url: '',
  btn1Title: '',
  btn2Url: '',
  btn2Title: ''
};