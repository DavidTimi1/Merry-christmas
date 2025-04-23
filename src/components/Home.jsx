import './Home.css';
import './gift.css';
import '../css packages/animate.css';

import santaGIF from "../assets/santa1.gif";
import scrollImg from '../assets/scroll-folded.png';

import day1Gift from '../assets/day1.png';
import day2Gift from '../assets/day2.png';
import day3Gift from '../assets/day3.png';
import day4Gift from '../assets/day4.png';
import day5Gift from '../assets/day5.png';
import day6Gift from '../assets/day6.png';
import day7Gift from '../assets/day7.png';
import day8Gift from '../assets/day8.png';
import day9Gift from '../assets/day9.png';
import day10Gift from '../assets/day10.png';
import day11Gift from '../assets/day11.png';
import day12Gift from '../assets/day12.png';

import { GiftContext } from './context.jsx';
import giftImg from "../assets/giftbox-close.png";
import openedGift from "../assets/giftbox-open2.png";
import { forwardRef, useEffect, useRef, useState, useContext } from 'react';
import Floor from './Floor';
import SnowBox from './snowing/Snowing';
import { ScrollModal } from './Modals';
import { ChristmasDayContext } from '../contexts.js';

const Home = () => {
    const santaRef = useRef(null);
    const [showGift, setShowGift] = useState(true);
    const christmasDay = useContext(ChristmasDayContext).value;

    useEffect(() => {

    })

    return (
        <div className="max">
            <div className="max abs-top">
                <Santa ref={santaRef} />
                <Floor />
                <SnowBox />

                <NotChristmas />

                <div className="abs" style={{ top: 0, right: 0 }}>
                    <a
                        href="https://github.com/DavidTimi1/Merry-christmas"
                        aria-label="View source on GitHub"
                        className="github-corner"
                    >
                        <svg
                            width="80"
                            height="80"
                            viewBox="0 0 250 250"
                            aria-hidden="true"
                            style={{
                                fill: "#33aa44",
                                color: "#0d1430",
                                position: "absolute",
                                top: 0,
                                border: 0,
                                right: 0,
                            }}
                        >
                            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                            <path
                                d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                                fill="currentColor"
                                className="octo-arm"
                                style={{ transformOrigin: "130px 106px" }}
                            ></path>
                            <path
                                d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                                fill="currentColor"
                                className="octo-body"
                            ></path>
                            
                        </svg>
                    </a>
                </div>

                <div className="abs fw" style={{ bottom: 0, left: 0 }}>
                    <Credit />
                </div>
            </div>

            {christmasDay !== false && (
                <GiftContext.Provider value={{ hideGift: () => setShowGift(false) }}>
                    {showGift && <GiftBox />}
                </GiftContext.Provider>
            )}
        </div>
    );
}


const Credit = () => (
    <footer className='center-text'>
        <span>Created with </span> <span style={{ color: 'red' }}> ❤ </span>
        <span> by </span>

        <a href="https://github.com/DavidTimi1" target='_blank' style={{fontSize: "larger"}}> TimiDev </a>
        
        <a className="hide" href="https://davidtimi.github.io">
            Link to David's (TimiDev) portfolio website
        </a>
    </footer>
)


const Santa = forwardRef((props,ref) => {
    const isChristmas = useContext(ChristmasDayContext).value;

    return (
        isChristmas !== false &&

        <div className='fw pad'>
            <h1>
                Merry Christmas
            </h1>
            <h3 className='hny'>
                and a Happy New Year
            </h3>
            <div className="abs-top santa" style={{width: "min(480px, 90%)"}}>
                <img ref={ref} className="fw" src={santaGIF} alt="" style={{objectFit: "cover"}} />
            </div>

        </div>
    )
})

const GiftBox = () => {
    const ref = useRef(null), contentRef = useRef(null);
    const [opened, setOpened] = useState(false);
    const [info, setInfo] = useState("");
    const [openScroll, setOpenScroll] = useState(false);
    const christmasDay = useContext(ChristmasDayContext).value;
    
    const daysPack = daysOfChristmas[christmasDay];

    useEffect(() => {
        setTimeout(() => {
            ref.current.classList.remove("hide");
            showMessage("Click to Open Gift");
        }, 4000)
        
    }, []);

    
    useEffect(() => {
        if (opened){
            setTimeout(() => {
                const openBox = document.getElementById("open-box");
                openBox.classList.add("obscure");
            }, 1000)
        }
        
    }, [opened]);


    return (
        <label className='overlay'>
            <div className='info'>
                <h2 className='pad center-text'>
                    { info }
                </h2>
            </div>
            <div className='abs-mid'>
                {
                    opened ?
                    
                    <div id="open-box" className='img-trans' style={{width: "250px"}}>
                        <img src={openedGift} alt="" className='fw' style={{objectFit: "contain"}} />
                    </div>
                    :
                    <div ref={ref} className='hide gift-box img-trans animated zoomInDown_' style={{width: "200px"}}>
                        <img src={giftImg} alt="" className='fw' style={{objectFit: "contain"}} />
                    </div>

                }
            </div>
            
                <GiftContent ref={contentRef} isScrollOpen={openScroll} gift={daysPack.gift} />

                { openScroll && <ScrollModal verse={daysPack.verse} /> }

            <div className='sr-only hide'>
                    
                <button onClick={handleClick}>
                    open gift
                </button>
            </div>

        </label>
    )

    function handleClick(){
        if (opened){
            if (openScroll === undefined){
                setOpenScroll(true)
                setInfo('')
            }

        } else {
            if (ref.current?.classList?.contains("hide") ) return 

            setOpened(true);
            animations();
        }
    }

    function showMessage(message){
        setInfo(message);
    }

    function animations(){
        // JavaScript logic for animations
        const giftBox = document.querySelector(".gift-cont");

        const scroll = giftBox.querySelector('.scroll');
        const dayCard = giftBox.querySelector('.day-gift');
        

        // setTimeout(() => {
        //     giftBox.style.display = 'none';
        //     openBox.classList.remove('will-trans');
        // }, 500); // Matches the CSS transition duration
        
        // Step 2: Animate the scroll emerging from the box
        setTimeout(() => {
            scroll.classList.remove('will-trans');
            scroll.classList.add('glow', "emerge");
            scroll.style.opacity = 1;

            setOpenScroll(undefined);
            showMessage("Click to read scroll");
            
        }, 3000);
        
        // Step 3: Animate the pigeon card emerging after the scroll
        setTimeout(() => {
            dayCard.classList.remove('will-trans');
            dayCard.classList.add('glow', "emerge");

        }, 1000); // Delays the pigeon animation to start after the scroll
        
    }
}

const GiftContent = forwardRef( ({gift, isScrollOpen}, ref) => {
    const giftOverlayClose = useContext(GiftContext).hideGift

    return (
    <div className='abs-mid gift-cont' ref={ref} >

        {/* <div className='flex mid-align even-space'> */}
            <div className="abs-mid day-gift animated img-trans will-trans" style={{width: "min(30vw, 100px)"}}>

                <div className='flex-col fw' style={{gap: "10px"}}>
                    <img className="fw" src={gift.src} alt="" style={{objectFit: "contain"}} />
                    <small className='center-text'>
                        {gift.descr}
                    </small>
                </div>
            </div>

            <div className="abs-mid will-trans animated img-trans scroll" style={{width: "min(40vw, 150px)"}}>
                <div className='flex-col fw' style={{gap: "10px"}}>
                    <img className="fw" src={scrollImg} alt="" style={{objectFit: "contain"}} />
                    <small className='center-text'>
                        Verse of the day
                    </small>
                </div>
            </div>
        {/* </div> */}
        {
           isScrollOpen &&

        <div className='abs' style={{bottom: "20%"}}>
            <button onClick={handleClose}>
                Close
            </button>
        </div>
        }
    </div>
)

function handleClose(e){
    e.stopPropagation()
    giftOverlayClose();
}
})

const NotChristmas = () => {
    const cd = useContext(ChristmasDayContext), isChristmas = cd.value, ignoreDate = cd.ignore;
    
    return (
        isChristmas === false &&

        <div className='abs-mid flex-col mid-align center-text gap-5'>
            <h1> 404 </h1>
            <p>
                Santa not found 🎅 <br></br>
                It's no longer christmas 😢
            </p>
            <button onClick={ignoreDate}>
                Pretend it Is ! 😂
            </button>
        </div>
    )
}

export default Home





const daysOfChristmas = [
    {
        gift: {
            descr: <>A Partridge <br></br> in a Pear Tree</>,
            src: day1Gift
        },
        verse: {
            txt: "Therefore the Lord Himself will give you a sign: Behold, the virgin shall conceive and bear a Son, and shall call His name Immanuel.",
            loc: "Isaiah 7:14"
        }
    },
    {
        gift: {
            descr: <>2 Turtle Doves</>,
            src: day2Gift
        },
        verse: {
            txt: "For a child will be born for us, a son will be given to us, and the government will be on His shoulders. He will be named Wonderful Counselor, Mighty God, Eternal Father, Prince of Peace. The dominion will be vast, and its prosperity will never end.",
            loc: "Isaiah 9:6-7"
        }
    },
    {
        gift: {
            descr: <>3 French Hens</>,
            src: day3Gift
        },
        verse: {
            txt: "Bethlehem Ephrathah, you are small among the clans of Judah; One will come from you to be ruler over Israel for Me. His origin is from antiquity, from eternity.",
            loc: "Micah 5:2"
        }
    },
    {
        gift: {
            descr: <>4 Calling Birds</>,
            src: day4Gift
        },
        verse: {
            txt: "The Word became flesh and dwelt among us. We observed His glory, the glory as the One and Only Son from the Father, full of grace and truth.",
            loc: "John 1:14"
        }
    },
    {
        gift: {
            descr: <>5 Golden Rings</>,
            src: day5Gift
        },
        verse: {
            txt: "But you, Bethlehem, in the land of Judah, are by no means least among the rulers of Judah: because out of you will come a ruler who will shepherd My people Israel.",
            loc: "Matthew 2:6"
        }
    },
    {
        gift: {
            descr: <>6 Geese a-Laying</>,
            src: day6Gift
        },
        verse: {
            txt: "She will give birth to a son, and you are to name Him Jesus, because He will save His people from their sins.",
            loc: "Matthew 1:21"
        }
    },
    {
        gift: {
            descr: <>7 Swans a-Swimming</>,
            src: day7Gift
        },
        verse: {
            txt: "Suddenly there was a multitude of the heavenly host with the angel, praising God and saying: 'Glory to God in the highest heaven, and peace on earth to people He favors!'",
            loc: "Luke 2:13-14"
        }
    },
    {
        gift: {
            descr: <>8 Maids a-Milking</>,
            src: day8Gift
        },
        verse: {
            txt: "For today in the city of David a Savior was born for you, who is the Messiah, the Lord. This will be the sign for you: You will find a baby wrapped tightly in cloth and lying in a manger.",
            loc: "Luke 2:11-12"
        }
    },
    {
        gift: {
            descr: <>9 Ladies Dancing</>,
            src: day9Gift
        },
        verse: {
            txt: "And Mary said: My soul magnifies the Lord, and my spirit rejoices in God my Savior, because He has looked with favor on the humble condition of His servant.",
            loc: "Luke 1:46-48"
        }
    },
    {
        gift: {
            descr: <>10 Lords a-Leaping</>,
            src: day10Gift
        },
        verse: {
            txt: "Rejoice greatly, Daughter Zion! Shout in triumph, Daughter Jerusalem! Look, your King is coming to you; He is righteous and victorious, humble and riding on a donkey, on a colt, the foal of a donkey.",
            loc: "Zechariah 9:9"
        }
    },
    {
        gift: {
            descr: <>11 Pipers Piping</>,
            src: day11Gift
        },
        verse: {
            txt: "When they saw the star, they were overwhelmed with joy. Entering the house, they saw the child with Mary His mother, and falling to their knees, they worshiped Him. Then they opened their treasures and presented Him with gifts: gold, frankincense, and myrrh.",
            loc: "Matthew 2:10-11"
        }
    },
    {
        gift: {
            descr: <>12 Drummers Drumming</>,
            src: day12Gift
        },
        verse: {
            txt: "For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life.",
            loc: "John 3:16"
        }
    }
]
