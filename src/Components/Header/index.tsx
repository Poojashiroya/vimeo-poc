import { useState } from "react";
import Image from "next/image";
import cn from "classnames";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";

import rightBlackArrow from "@/assets/images/right_black_arrow.png";
import leftBlackArrow from "@/assets/images/left_black_arrow.png";
import gif from "@/assets/videos/background-gif.gif";
import video from "@/assets/images/video.png";
import upArrow from "@/assets/images/up_black_arrow.png";
import logo from "@/assets/images/logo.png";
import downArrow from "@/assets/images/down_black_arrow.png";
import searchIcon from "@/assets/images/search.png";
import PrimaryBtn from "@/Components/Buttons/PrimaryBtn/PrimaryBtn";
import NavigationList from "../NavigationList";

//css
import styles from "./index.module.css";

/**
 * [Header]
 * @returns Header
 */
export default function StyledHeader () {
    const [showMobileNavigation, setMobileNavigation] = useState(false);
    const [mobileMenuNavigation, setMobileMenuNavigation] = useState(-1);

    const [navigationBar, setNavigationBar] = useState(-1);
    const [navigation, setNavigation] = useState(-1);

    const handleMobileNavigation = () => {
        if(showMobileNavigation)
        {
            setNavigationBar(-1);
            setNavigation(-1);
            setMobileMenuNavigation(-1);
        }
        setMobileNavigation(!showMobileNavigation);
    }

    const handleMobileMenuNavigation = (val:any) => {
         if(val>-1){
            setMobileMenuNavigation(val);
            setNavigationBar(val);
            setNavigation(val);
         }
         else {
            setMobileMenuNavigation(-1);
            setNavigationBar(-1);
            setNavigation(-1);
         }
    }

    const handleMobileSubMenuNavigation = () => {
        setMobileMenuNavigation(-1);
        setMobileNavigation(true);
    }

    const handleClick = (val: any) => {
        if(navigation !== val)
        {
            setNavigation(val);
            setNavigationBar(val);
        }
        else
        {
            setNavigation(-1);
            setNavigationBar(-1);
        }
    }

    const listData = [
        {
            title: "Create & EDIT Videos",
            listItems: [
                {
                    title: "Screen Recorder",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Video Maker & Editor",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Interactive Video",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                }
            ]
        },
        {
            title: "HOST VIRTUAL EVENTS",
            listItems: [
                {
                    title: "Virtual Events",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Webinars",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Live Streaming",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                }
            ]
        },
        {
            title: "Manage VIDEOS",
            listItems: [
                {
                    title: "Video Hosting",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Video Privacy",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Video Analytics",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Video Collaboration",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                }
            ]
        },
        {
            title: "SHARE VIDEOS",
            listItems: [
                {
                    title: "Integrations",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Ad Free Player",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "OTT",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                }
            ]
        }
    ];

    const listData1 = [
        {
            title: "VIMEO FOR",
            listItems: [
                {
                    title: "Enterprise",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Small Business",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Creative Professionals",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Education",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                }
            ]
        },
        {
            title: "Use Cases",
            listItems: [
                {
                    title: "Video Marketing",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Events & Webinars",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Employee Comms",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Video Monetization",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                }
            ]
        }
    ];

    const listData2 = [
        {
            title: "Learn",
            listItems: [
                {
                    title: "Blog",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Events & Experiences",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Guides & Tools",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Video School",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Help Center",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
            ]
        },
        {
            title: "connect",
            listItems: [
                {
                    title: "Community",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Developers",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Become a Partner",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Hire a Video Pro",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                }
            ]
        }
    ];

    const listData3 = [
        {
            title: "Featured",
            listItems: [
                {
                    title: "Best of the Year",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Staff Picks",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                }
            ]
        },
        {
            title: "BROWSE VIDEOS BY",
            listItems: [
                {
                    title: "Categories",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "Channels",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                },
                {
                    title: "On Demand",
                    desc: "Lorem ipsum dolor sit amet",
                    img: video,
                    imgAlt: "video-img",
                    url: ""
                }
            ]
        }
    ]

    const navigationMenu = [
        {
            title: "Video Platform",
            img: true,
            imgAlt: "arrow-img"
        },
        {
            title: "Solutions",
            img: true,
            imgAlt: "arrow-img"
        },
        {
            title: "Custom Stories",
            img: false,
        },
        {
            title: "Resources",
            img: true,
            imgAlt: "arrow-img"
        },
        {
            title: "Watch",
            img: true,
            imgAlt: "arrow-img"
        },
        {
            title: "Pricing",
            img: false
        }
    ]

    const quickStartList = [
        {
            title: "Upload Video",
            href: "",
        },
        {
            title: "Edit a Video",
            href: "",
        },
        {
            title: "Create a Video",
            href: "",
        },
        {
            title: "Record a Video",
            href: "",
        }
    ]
    
    return (
        <header className={styles.header}>
             <div className={styles.headerContent}>
              <Image src={logo} alt="header-logo" className={styles.headerLogo} />
              <div className={styles.navigationContainer}>
                <ul className={styles.navigationList}>
                    {navigationMenu && navigationMenu.map((menuItem, index) => (
                      <li className={styles.listItem} key={menuItem.title}>
                        <button className={styles.navigationItem} onClick={() => handleClick(index)}>
                            {menuItem.title}
                            {menuItem.img && <Image src={navigation === index ? upArrow : downArrow} alt="arrow" className={styles.arrow} />}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
              <div className={styles.loginContainer}>
                <div className={styles.searchWrapper} >
                    <input type="text" className={styles.searchText} />
                    <Image src={searchIcon} alt="search-icon"  className={styles.searchIcon} />
                </div>
                <a href="#" className={styles.loginLink} >Login</a>
                <PrimaryBtn title="Get Started" href="#"  />
                <button className={styles.menuIconWraper} onClick={handleMobileNavigation} >
                    <CiMenuBurger />
                </button>
              </div>
            </div>
            {showMobileNavigation && (<div className={styles.mobileNavigationContainer}>
                {mobileMenuNavigation === -1 && (<><div className={styles.mobileNavigationHeader}>
                    <button className={styles.mobileIcon} ><AiOutlineSearch /></button>
                    <Image src={logo} alt="vimeo-logo" className={styles.mobileLogo} />
                    <button onClick={handleMobileNavigation} className={styles.mobileIcon}><GrFormClose /></button>
                </div>
                <div>
                <ul className={styles.mobileNavigationList}>
                    {navigationMenu && navigationMenu.map((menuItem, index) => (
                      <li className={styles.mobileNavigationlistItem} key={menuItem.title}>
                        <button className={styles.mobileNavigationItem} onClick={() => handleMobileMenuNavigation(index)}>
                            {menuItem.title}
                            {menuItem.img && <Image src={rightBlackArrow} alt="arrow" className={styles.mobileArrow} />}
                        </button>
                      </li>
                    ))}
                </ul>
                </div>
                <div className={styles.mobileBtnsContainer}>
                    <PrimaryBtn href="" title="Get Started" />
                    <a className={styles.outlinedBtn} href="" >Download App</a>
                </div>
                </>)}
                {
                    mobileMenuNavigation !== -1 && (
                        <div className={styles.mobileSubMenu}>
                           <div className={styles.mobileSubMenuHeader}>
                            <div className={styles.mobileSubNavigationBackContainer}>
                            <button className={styles.mobileIcon} onClick={handleMobileSubMenuNavigation}>
                                <Image src={leftBlackArrow} alt="left-arrow" className={styles.mobileArrow} />
                            </button>
                            <h4 className={styles.mobileSubMenuTitle}>{navigationMenu[mobileMenuNavigation].title}</h4>
                            </div>
                           <button onClick={handleMobileNavigation} className={styles.mobileIcon}><GrFormClose /></button>
                           </div>
                        </div>
                    )
                }
            </div> )} 
            {navigationBar === 0 && <div className={styles.navigationDataContainer}><div className={styles.headerNavigationContainer}>
              {listData && listData.map((listItem) => <NavigationList list={listItem} key={listItem.title} />)}
            </div></div>}
            {navigationBar === 1 && <div className={styles.navigationDataContainer}>
            <div className={cn(styles.headerNavigationContainer, styles.wrapper)}>
              {listData1 && listData1.map((listItem) => <NavigationList list={listItem} key={listItem.title} />)}            
            </div>
              <div className={styles.quickStart}>
                <h3 className={styles.quickStartTitle}>Quick Start</h3>
                {quickStartList && (
                <ul className={styles.quickStartList}>
                    {quickStartList.map((item) => (
                    <li className={styles.quickStartLisItem} key={item.title}>
                        <a href={item.href} className={styles.quickStartListItemUrl} >
                            {item.title}
                        </a>
                    </li>))}
                </ul>
                )}
              </div>
            </div>}
            {navigationBar === 2 && (
              <div className={styles.navigationDataContainer}>
                <div className={styles.headerNavigationContainer}>
                 {listData && listData.map((listItem) => (
                   <NavigationList list={listItem} key={listItem.title} />
                 ))}
                </div>
              </div>
            )}
            {navigationBar === 3 && (
            <div className={styles.navigationDataContainer}>
                <div className={cn(styles.headerNavigationContainer, styles.wrapper)}>
                  {listData2 && listData2.map((listItem) => (
                    <NavigationList list={listItem} key={listItem.title} />
                  ))}
                </div>
                <div className={styles.navigationVideoContainer}>
                    <Image src={gif} alt="gif" className={styles.navigationVideo} />
                    <h3 className={styles.navigationVideoTitle}>Your All-In-One Solution</h3>
                    <p className={styles.navigationVideoDesc}>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            )}
            {navigationBar === 4 && <div className={styles.navigationDataContainer}>
                <div className={cn(styles.headerNavigationContainer,  styles.wrapper)}>
              {listData3 && listData3.map((listItem) => <NavigationList list={listItem} key={listItem.title} />)}
            </div>
            <div className={styles.navigationVideoContainer}>
                    <Image src={gif} alt="gif" className={styles.navigationVideo} />
                    <h3 className={styles.navigationVideoTitle}>Your All-In-One Solution</h3>
                    <p className={styles.navigationVideoDesc}>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>}
            {navigationBar === 5 && <div className={styles.navigationDataContainer}><div className={styles.headerNavigationContainer}>
              {listData && listData.map((listItem) => <NavigationList list={listItem} key={listItem.title} />)}
            </div></div>}
        </header>
    )
}